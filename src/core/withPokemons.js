import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import getPokemons from "../core/getPokemons";
import {
  fetchPokemons,
  fetchPokemonsSuccess,
  fetchPokemonsError,
  loadingSelector,
  pokemonsSelector,
} from "../redux/pokemons";

const withPokemons = connect(
  state => ({
    loading: loadingSelector(state),
    pokemons: pokemonsSelector(state),
  }),
  {
    fetchPokemons,
    fetchPokemonsSuccess,
    fetchPokemonsError,
  }
);

const withPokemonsFetch = Component =>
  class extends React.Component {
    async componentDidMount() {
      this.props.fetchPokemons();
      try {
        const pokemons = await getPokemons({ limit: 151 });
        this.props.fetchPokemonsSuccess(
          pokemons.map((pokemon, idx) => ({
            id: idx + 1,
            name: pokemon.name,
            image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad(idx + 1, 3)}.png`,
          }))
        );
      } catch (e) {
        this.props.fetchPokemonsError(e.message);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  };

function pad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export default compose(
  withPokemons,
  withPokemonsFetch
);
