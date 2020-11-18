// @flow
import { gql, useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

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

const PokemonDetail = ({ route }) => {
  const { data: { pokemon } = {}, loading, error } = useQuery(POKEMON_QUERY, {
    variables: {
      id: route.params.pokemonId
    }
  });
  console.log("Pokemon", { pokemon, loading, error });

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <>
          <PokemonImage source={{ uri: pokemon?.image }} resizeMode="contain" />
          <Row>
            <Name>{pokemon?.name}</Name>
            <Number>{`# ${pokemon?.id}`}</Number>
          </Row>
          <Row>
            <Description>{pokemon?.description}</Description>
          </Row>
        </>
      )}
    </Container>
  );
};

const Name = styled.Text`
  font-size: 30px;
  color: white;
  margin: 0;
`;
const Number = styled.Text`
  color: white;
  font-size: 30px;
  margin: 0;
`;
const Description = styled.Text`
  color: white;
  font-size: 20px;
  width: 100%;
`;
const PokemonImage = styled.Image`
  max-width: 300px;
  height: 400px;
  width: 90%;
  display: block;
`;

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 16px;
  flex: 1;
  background: #282c34;
`;
const Row = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export default PokemonDetail;
