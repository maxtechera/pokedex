const { ApolloServer } = require('apollo-server-micro');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./schema');
const { prisma } = require('../prisma/generated/prisma-client');
// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      db: prisma,
    };
  },
});

module.exports = server.createHandler();
