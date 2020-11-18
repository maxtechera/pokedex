// @flow
import { gql, useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";

const POKEMON_QUERY = gql`
  query PokemonById($id: ID!) {
    pokemon(id: $id) {
      id
      name
      description
      image
    }
  }
`;

const PokemonDetail = ({ pokemonId }) => {
  const { data: { pokemon } = {} } = useQuery(POKEMON_QUERY, {
    variables: {
      id: pokemonId
    }
  });
  if (!pokemon) return null;
  return (
    <Container>
      <PokemonImage src={pokemon?.image} />
      <Row>
        <Name>{pokemon?.name}</Name>
        <Number>{`# ${pokemon?.id}`}</Number>
      </Row>
      <Row>
        <Description>{pokemon?.description}</Description>
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
