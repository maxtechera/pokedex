// @flow
import React from "react";
import styled, { css } from "styled-components/native";
import { gql, useQuery } from "@apollo/client";
import { TouchableOpacity, ActivityIndicator } from "react-native";

const POKEMONS_QUERY = gql`
  query AllPokemons {
    pokemons {
      id
      name
      image
    }
  }
`;

const PokemonList = ({ navigation }) => {
  const { data: { pokemons = [] } = {}, loading } = useQuery(POKEMONS_QUERY);
  return (
    <DisplayContainer>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <List>
          {pokemons.map(pokemon => (
            // <Link to={`/pokemon/${pokemon.id}`}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Detail", { pokemonId: pokemon.id })
              }
            >
              <Item
                key={pokemon.id}

                // selected={pokemon.id == match?.params?.pokemonId}
              >
                <Image source={{ uri: pokemon.image }} resizeMode="contain" />
                <Name>{pokemon.name}</Name>
              </Item>
            </TouchableOpacity>
          ))}
        </List>
      )}
    </DisplayContainer>
  );
};

const DisplayContainer = styled.View`
  height: 100%;
  width: 100%;
  background: #282c34;
  overflow: auto;
  justify-content: center;
  flex: 1;
`;

const List = styled.ScrollView`
  justify-items: end;
  padding: 16px 16px;
  width: 100%;
`;

const Item = styled.View`
  width: 100%;
  border-radius: 5px;
  padding: 8px;
  ${props =>
    props.selected &&
    css`
      background: rgba(255, 255, 255, 0.4);
    `}
`;

const Image = styled.Image`
  width: 100%;
  height: 200px;
  padding: 0px 16px;
`;

const Name = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
  width: 100%;
`;

export default PokemonList;
