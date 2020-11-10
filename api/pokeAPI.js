const fetch = require("node-fetch");

const fetchPokemons = () =>
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=150", {
    method: "GET",
    headers: {}
  })
    .then(res => res.json())
    .then(response => {
      const { results } = response;
      return results.map((item, idx) => ({
        id: idx + 1,
        name: item.name,
        image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${`${idx +
          1}`.padStart(3, "0")}.png`
      }));
    });
exports.fetchPokemons = fetchPokemons;

const getImageURL = id =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${`${id}`.padStart(
    3,
    "0"
  )}.png`;

const fetchPokemon = ({ id }) =>
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`, {
    method: "GET",
    headers: {}
  })
    .then(res => res.json())
    .then(pokemon => ({
      id,
      name: pokemon.name,
      image: getImageURL(id),
      description: pokemon.flavor_text_entries.find(
        ({ language: { name } }) => name === "en"
      ).flavor_text
    }));

exports.fetchPokemon = fetchPokemon;
