const getPokemon = ({ id }) =>
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(res => res.json());

export default getPokemon;
