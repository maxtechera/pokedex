// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const { gql } = require('apollo-server');
const typeDefs = gql`
  type Pokemon {
    id: ID!
    name: String!
    description: String!
    imageUrl: String!
  }

  type Query {
    pokemons(limit: Int): [Pokemon!]
  }
`;
module.exports = {
  typeDefs,
};
