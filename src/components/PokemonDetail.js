// @flow
import React from "react";
import styled from "styled-components";
import withPokemonDetail from "../core/withPokemonDetail";
import Logo from "./Logo";
type Props = {};
const PokemonDetail = ({ pokemon }: Props) => {
  // const pokemon = {
  //   id: 1,
  //   name: "Bulbasur",
  //   image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
  //   description:
  //     "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  // };
  console.log("Pokemon", { pokemon });
  if (!pokemon) return <Logo />;
  return (
    <Container>
      <PokemonImage src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad(pokemon.id, 3)}.png`} />
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

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

const Name = styled.h2`
  text-transform: capitalize;
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
  padding: 16px;
  flex: 1;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export default withPokemonDetail(PokemonDetail);
