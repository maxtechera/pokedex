const getPokemon = ({ id }) =>
  fetch("https://pokeapi.co/api/v2/pokemon-species/" + id).then(response => response.json());

export default getPokemon;
