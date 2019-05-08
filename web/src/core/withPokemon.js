import React from "react";
import getPokemon from "../core/getPokemon";

const withPokemon = Component =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedPokemon: null,
      };
    }

    componentWillMount() {
      if (this.props.selectedId) {
        getPokemon({ id: this.props.selectedId }).then(pokemon =>
          this.setState({
            selectedPokemon: pokemon,
          })
        );
      }
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.selectedId !== nextProps.selectedId) {
        getPokemon({ id: nextProps.selectedId }).then(pokemon =>
          this.setState({
            selectedPokemon: pokemon,
          })
        );
      }
    }

    render() {
      const { selectedPokemon } = this.state;

      return (
        <Component
          selectedPokemon={selectedPokemon}
          // Passthrough props
          {...this.props}
        />
      );
    }
  };

export default withPokemon;
