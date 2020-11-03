const { ApolloServer, gql } = require("apollo-server-micro");
const fetch = require("node-fetch");
const jwt = require("jsonwebtoken");

const TOKEN_SECRET = "supersecrettokenwhatever";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
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
    username: String
    token: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    #books: [Book]
    pokemons: [Pokemon]
    pokemon(id: ID!): Pokemon
    user: User
  }

  input SignInInput {
    username: String!
    password: String!
  }

  type Mutation {
    signIn(input: SignInInput!): User!
  }
`;

const fetchPokemons = () =>
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=150", {
    method: "GET",
    headers: {}
  }).then(res => res.json());

const pokemonsResolver = (root, args, ctx, info) => {
  return fetchPokemons().then(response => {
    const { results } = response;
    return results.map((item, idx) => ({
      id: idx + 1,
      name: item.name,
      image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${`${idx +
        1}`.padStart(3, "0")}.png`
    }));
  });
};

const getImageURL = id =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${`${id}`.padStart(
    3,
    "0"
  )}.png`;

const fetchPokemon = ({ id }) =>
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`, {
    method: "GET",
    headers: {}
  })
    .then(res => res.json())
    .then(pokemon => ({
      id,
      name: pokemon.name,
      image: getImageURL(id),
      description: pokemon.flavor_text_entries.find(
        ({ language: { name } }) => name === "en"
      ).flavor_text
    }));

const pokemonResolver = (root, args, ctx, info) => {
  return fetchPokemon({ id: args.id });
};

const userResolver = (root, args, ctx, info) => {
  return ctx.user;
};

const signInResolver = (root, { input: { username, password } }, ctx, info) => {
  if (username == "test" && password == "1234") {
    const user = {
      id: 1,
      username
    };
    const token = jwt.sign(user, TOKEN_SECRET);
    return {
      ...user,
      token
    };
  }
};

const resolvers = {
  Query: {
    pokemons: pokemonsResolver,
    pokemon: pokemonResolver,
    user: userResolver
  },
  Mutation: {
    signIn: signInResolver
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //   context: {
  //       "API_KEY": '',
  //   },
  context: ({ req }) => {
    // Get the user token from the headers.
    const token = req.headers.authorization || "";

    // try to retrieve a user with the token
    const user = jwt.decode(token, TOKEN_SECRET);

    // add the user to the context
    return { user, API_KEY: "asdf" };
  }
});

module.exports = server.createHandler({
  path: "/api/graphql",
  introspection: true
});
