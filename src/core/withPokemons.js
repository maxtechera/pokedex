import React from "react";
import getPokemons from "../core/getPokemons";

const withPokemons = Component =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pokemons: [],
      };
    }

    componentWillMount() {
      getPokemons({ limit: 151 }).then(pokemons =>
        this.setState({
          pokemons: pokemons.map((pokemon, idx) => ({
            id: idx + 1,
            name: pokemon.name,
            image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad(idx + 1, 3)}.png`,
          })),
        })
      );
    }

    render() {
      const { pokemons } = this.state;

      return (
        <Component
          pokemons={pokemons}
          // Passthrough props
          {...this.props}
        />
      );
    }
  };

function pad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
export default withPokemons;
