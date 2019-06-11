import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import PokemonList from "../components/PokemonList";

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <PokemonList navigation={navigation} />
  </View>
);

export default HomeScreen;
