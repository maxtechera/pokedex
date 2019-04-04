const getPokemons = ({ limit }) =>
  fetch(`https://pokeapi.co/api/v2/pokemon-species?limit=${limit}`)
    .then(res => res.json())
    .then(response => response.results);

export default getPokemons;
