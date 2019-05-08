const getPokemons = require('./getPokemons');

const resolvers = {
  Query: {
    pokemons: (_, { limit }) =>
      getPokemons({ limit }).then(pokemons =>
        pokemons.map((p, idx) => ({
          ...p,
          id: idx + 1,
        })),
      ),
  },
  Pokemon: {
    imageUrl: p => `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad(p.id, 3)}.png`,
  },
};

const pad = (n, width, z) => {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

module.exports = {
  resolvers,
};
