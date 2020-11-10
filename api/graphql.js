const { ApolloServer } = require("apollo-server-micro");
const { getUserFromToken } = require("./auth");

const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");

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
    const user = getUserFromToken(token);

    // add the user to the context
    return { user, API_KEY: "asdf" };
  }
});

module.exports = server.createHandler({
  path: "/api/graphql",
  introspection: true
});
