import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "https://pokedex.max-techera.now.sh/graphql",
});
