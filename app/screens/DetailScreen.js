import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import PokemonList from "../components/PokemonList";
const DetailScreen = ({ navigation }) => {
  const pokemon = navigation.getParam("pokemon");
  return (
    <View style={{ flex: 1 }}>
      <Item key={pokemon.id}>
        <Image source={{ uri: pokemon.imageUrl }} resizeMode="contain" />
        <Name>{pokemon.name}</Name>
      </Item>
      <PokemonList navigation={navigation} />
    </View>
  );
};

const Item = styled.View`
  height: 300px;
  width: 100%;
  border-radius: 5px;
  padding: 8px;
  background: rgba(255, 255, 255, 0);
  ${props =>
    props.selected &&
    `
  background:rgba(255,255,255,0.3);
  `}
`;

const Image = styled.Image`
  width: 100%;
  height: 250px;
  padding: 0px 16px;
`;

const Name = styled.Text`
  color: black;
  font-size: 24px;
  text-align: center;
  width: 100%;
`;

export default DetailScreen;
