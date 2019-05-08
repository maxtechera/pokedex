const fetch = require('node-fetch');

const getPokemons = ({ limit = 151 } = {}) =>
  fetch(`https://pokeapi.co/api/v2/pokemon-species?limit=${limit}`)
    .then(res => res.json())
    .then(response => response.results)
    .then(pokemons =>
      pokemons.map((p, idx) => ({
        ...p,
        id: idx + 1,
      })),
    );

module.exports = getPokemons;
