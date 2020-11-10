const { gql } = require("apollo-server-micro");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  #   type Book {
  #     title: String
  #     author: String
  #   }
  type Pokemon {
    id: ID!
    name: String!
    description: String
    image: String!
  }

  type User {
    id: String
    username: String
    token: String
    email: String
    name: String
    favorites: [Pokemon]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    #books: [Book]
    pokemons: [Pokemon]
    pokemon(id: ID!): Pokemon
    user: User!
  }

  input SignInInput {
    username: String!
    password: String!
  }

  input SignUpInput {
    username: String!
    password: String!
    email: String
    name: String
  }

  type Mutation {
    signIn(input: SignInInput!): User!
    signUp(input: SignUpInput!): User!
  }
`;
