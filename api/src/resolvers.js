const getPokemons = require('./getPokemons');

const resolvers = {
  Query: {
    pokemons: (_, { limit }) => getPokemons({ limit }),
  },
};

module.exports = {
  resolvers,
};
