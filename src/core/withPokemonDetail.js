import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import getPokemonDetail from "./getPokemonDetail";
import { selectPokemon } from "./redux";

const fetchOnMount = Component =>
  class extends React.Component {
    componentDidMount() {
      if (this.props.selectedId) {
        getPokemonDetail({ id: this.props.selectedId }).then(pokemon => this.props.selectPokemon(pokemon));
      }
    }
    componentWillReceiveProps(nextProps) {
      if (this.props.selectedId !== nextProps.selectedId) {
        getPokemonDetail({ id: nextProps.selectedId }).then(pokemon => this.props.selectPokemon(pokemon));
      }
    }
    render() {
      return (
        <Component
          //Pass all props received by the hoc
          {...this.props}
        />
      );
    }
  };

export default compose(
  connect(
    state => ({
      pokemon: state.selectedPokemon,
      selectedId: state.selectedId,
    }),
    (dispatch, store) => ({
      selectPokemon: pokemons => dispatch(selectPokemon(pokemons)),
    }),
  ),
  fetchOnMount,
);
