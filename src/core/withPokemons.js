import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { setPokemons, setSelectedId } from "./redux";

import getPokemons from "./getPokemons";

const withPokemons = Component =>
  class extends React.Component {
    componentDidMount() {
      getPokemons({ limit: 151 }).then(pokemons => this.props.setPokemons(pokemons));
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
      pokemons: state.pokemons,
      selectedId: state.selectedId,
    }),
    (dispatch, store) => ({
      setPokemons: pokemons => dispatch(setPokemons(pokemons)),
      setSelectedId: id => dispatch(setSelectedId(id)),
    }),
  ),
  withPokemons,
);
