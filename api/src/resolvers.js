const getPokemons = require('./getPokemons');
const getPokemon = require('./getPokemon');

const resolvers = {
  Mutation: {
    login: (parent, args, ctx) => {
      return ctx.db.upsertUser({
        where: {
          name: args.name,
        },
        update: {
          name: args.name,
        },
        create: {
          name: args.name,
        },
      });
    },
    addToFavorite: async (parent, args, ctx) => {
      const user = await ctx.db.user({ id: args.userId });
      return ctx.db.updateUser({
        where: {
          id: args.userId, //Better if taken from headers
        },
        data: {
          favoritePokemonIds: {
            set: [...user.favoritePokemonIds, args.pokemonId],
          },
        },
      });
    },
  },
  Query: {
    pokemons: (_, { limit }) => getPokemons({ limit }),
    pokemon: (_, { id }) => getPokemon({ id }),
  },
  Pokemon: {
    imageUrl: p => `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad(p.id, 3)}.png`,
    description: p =>
      p.flavor_text_entries
        ? p.flavor_text_entries.find(x => x.language.name == 'es').flavor_text
        : null,
  },
  User: {
    favoritePokemons: async (user, args, ctx) => {
      const pokemons = await getPokemons();
      return pokemons.filter(p => user.favoritePokemonIds.includes(p.id.toString()));
    },
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
