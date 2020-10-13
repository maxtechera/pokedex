// @flow
import React from "react";
import styled from "styled-components";

type Props = {};

const fetchPokemon = ({ id }) =>
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=150", {
    method: "GET",
    headers: {}
  }).then(res => res.json());

const PokemonDetail = ({ pokemonId }: Props) => {
  // const [pokemon, setPokemon] = React.useState();
  // React.useEffect(() => {
  //   fetchPokemon({ id: pokemonId }).then(response => {
  //     console.log("Result", response);
  //     setPokemon(response);
  //   });
  // }, [pokemonId]);
  const pokemon = {
    id: 1,
    name: "Bulbasur",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."
  };
  return (
    <Container>
      <PokemonImage src={pokemon.image} />
      <Row>
        <Name>{pokemon.name}</Name>
        <Number>{`# ${pokemon.id}`}</Number>
      </Row>
      <Row>
        <Description>{pokemon.description}</Description>
      </Row>
    </Container>
  );
};
const Name = styled.h2`
  font-size: 30px;
  color: white;
  margin: 0;
`;
const Number = styled.h3`
  color: white;
  font-size: 30px;
  margin: 0;
`;
const Description = styled.p`
  color: white;
  font-size: 20px;
  line-height: 1.2;
`;
const PokemonImage = styled.img`
  margin: auto;
  max-width: 300px;
  width: 90%;
  display: block;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  flex: 1;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export default PokemonDetail;
