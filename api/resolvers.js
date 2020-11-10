const Bcrypt = require("bcrypt");
const { User } = require("./models");
const { fetchPokemons, fetchPokemon } = require("./pokeAPI");
const { generateToken } = require("./auth");

const pokemonsResolver = (root, args, ctx, info) => {
  return fetchPokemons();
};

const pokemonResolver = (root, args, ctx, info) => {
  return fetchPokemon({ id: args.id });
};

const userResolver = (root, args, ctx, info) => {
  return ctx.user;
};

const signInResolver = async (
  root,
  { input: { username, password } },
  ctx,
  info
) => {
  const user = await User.findOne({ username });
  if (user && Bcrypt.compareSync(password, user.password)) {
    return user;
  }
};

const signUpResolver = async (
  root,
  { input: { username, password, email, name } },
  ctx,
  info
) => {
  const currentUser = await User.findOne({ username });
  if (currentUser) {
    throw new Error("UsernameAlreadyInUse");
  }
  const user = new User({
    username,
    password: Bcrypt.hashSync(password, 10),
    email,
    name
  });
  await user.save();
  return user.toJSON();
};

export const resolvers = {
  Query: {
    pokemons: pokemonsResolver,
    pokemon: pokemonResolver,
    user: userResolver
  },
  Mutation: {
    signIn: signInResolver,
    signUp: signUpResolver
  },
  User: {
    id: user => user._id,
    token: user => generateToken(user),
    favorites: async user => {
      // Return favorite pokemons
      // const favorites = await PokemonFavorites.find({ userId: user.id });
      // const pokemons = await fetchPokemons();
      // return pokemons.filter(x => favorites.includes(x.id));
      return [];
    }
  }
};
