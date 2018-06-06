const { ApolloServer } = require('apollo-server');

const { resolvers, typeDefs } = require('./graphql');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
        // Api,
        // Models,
        req,
        res: req.res,
        // dataloaders,
    }),
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
