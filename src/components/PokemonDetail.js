// @flow
import React from "react";
import styled from "styled-components";
import withPokemon from "../core/withPokemon";
import Logo from "./Logo";

type Props = {};
const PokemonDetail = ({ selectedPokemon, selectedId, language = "es" }: Props) => {
  console.log("PokemonDetail", selectedId);
  if (!selectedPokemon) return <Logo />;
  return (
    <Container>
      <PokemonImage
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad(
          selectedPokemon.id,
          3
        )}.png`}
      />
      <Row>
        <Name>{selectedPokemon.name}</Name>
        <Number>{`# ${selectedPokemon.id}`}</Number>
      </Row>
      <Row>
        <Description>
          {selectedPokemon.flavor_text_entries.find(x => x.language.name == language).flavor_text}
        </Description>
      </Row>
    </Container>
  );
};

function pad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
const Name = styled.h2`
  font-size: 30px;
  color: white;
  margin: 0;
  text-transform: capitalize;
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
export default withPokemon(PokemonDetail);
