const path = require('path');
const { mergeAll } = require('lodash/fp');
const { fileLoader } = require('merge-graphql-schemas');
const { makeExecutableSchema } = require('graphql-tools');

// const { isAuthenticated } = require('./resolvers');
// const { createResolverWrapper } = require('../utils/resolver-wrapper');
// const { FilterValue } = require('./modules/types/resolvers');
// const frontendResolvers = require('./modules/forntend/resolver');
// const accountingResolvers = require('./modules/accounting/resolvers');
// const testResolvers = require('./modules/notification/resolvers');
// const typesResolver = require('./modules/types/resolvers');

const typeDefs = fileLoader(path.join(__dirname, './**/*.graphql'), {
    recursive: true,
});

/* eslint-disable global-require */
const moduleResolvers = [];
/* eslint-enable global-require */

const resolvers = mergeAll([...moduleResolvers]);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports = {
    schema,
    typeDefs,
    resolvers,
};
