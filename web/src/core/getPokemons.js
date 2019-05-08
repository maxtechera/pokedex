const getPokemons = ({ limit = 151 } = {}) =>
  fetch(`https://pokeapi.co/api/v2/pokemon-species?limit=${limit}`)
    .then(res => res.json())
    .then(response => response.results);

module.exports = getPokemons;
