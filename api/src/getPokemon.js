const fetch = require('node-fetch');

const getPokemon = ({ id }) =>
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(res => res.json());

module.exports = getPokemon;
