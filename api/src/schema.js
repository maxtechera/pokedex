// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const { gql } = require('apollo-server');
const typeDefs = gql`
  type Pokemon {
    id: ID!
    name: String!
    description: String
    imageUrl: String!
  }
  type User {
    id: ID!
    name: String!
    password: String
    favoritePokemons: [Pokemon]
    favoritePokemonIds: [String]
  }

  type Query {
    pokemons(limit: Int): [Pokemon!]
    pokemon(id: ID!): Pokemon
    user(id: ID!): User
  }

  type Mutation {
    login(name: String!): User!
  }
`;
module.exports = {
  typeDefs,
};
