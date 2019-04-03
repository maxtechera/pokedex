import React from "react";
import getPokemons from "./getPokemons";

const withPokemons = Component =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pokemons: [],
      };
    }

    componentDidMount() {
      getPokemons({ limit: 151 }).then(pokemons => this.setState({ pokemons }));
    }

    render() {
      const { pokemons } = this.state;
      return (
        <Component
          pokemons={pokemons}
          //Pass all props received by the hoc
          {...this.props}
        />
      );
    }
  };

export default withPokemons;
