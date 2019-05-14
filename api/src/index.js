const { ApolloServer } = require('apollo-server');
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

server.listen().then(({ url }) => {
  console.log('Server rocking on PORT', url);
});
