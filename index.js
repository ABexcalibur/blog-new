const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const db = 'mongodb+srv://saumya:ss%40123456@cluster0.4iave.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');


const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

mongoose.connect(db, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB connected');
        return server.listen({ port: 5000})
    })
    .then(res => {
        console.log(`${res.url}`);
});
    