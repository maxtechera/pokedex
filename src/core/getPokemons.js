const getPokemons = ({ limit }) =>
  fetch(`https://pokeapi.co/api/v2/pokemon-species?limit=${limit}`)
    .then(response => response.json())
    .then(res => res.results);

export default getPokemons;
