// @flow
import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { TouchableOpacity } from "react-native";
import GET_POKEMONS from "../GET_POKEMONS";
// import { connect } from 'react-redux';
// import { logout } from '../redux';
// import Logo from "./Logo";

type Props = {};
const PokemonList = ({ navigation, doLogout, selectedId, setSelectedId }: Props) => {
  //   const data = {
  //     pokemons: [
  //       {
  //         id: 1,
  //         name: "Bulbasaur",
  //         imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  //       },
  //     ],
  //   };
  return (
    <Query query={GET_POKEMONS}>
      {({ data, loading, error }) =>
        loading
          ? null
          : console.log("QUERY", { data, loading, error }) || (
              <Container>
                <List>
                  {data.pokemons.map(pokemon => (
                    <TouchableOpacity
                      onPress={() => navigation.push("Detail", { pokemon })}
                      key={pokemon.id}
                    >
                      <Item selected={selectedId == pokemon.id} key={pokemon.id}>
                        <Image source={{ uri: pokemon.imageUrl }} resizeMode="contain" />
                        <Name>{pokemon.name}</Name>
                      </Item>
                    </TouchableOpacity>
                  ))}
                </List>
              </Container>
            )
      }
    </Query>
  );
};

const Container = styled.ScrollView`
  flex: 1;
`;

const List = styled.View`
  flex: 1;
  padding: 16px 16px;
`;

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

// export default connect(
//   null,
//   dispatch => ({
//     doLogout: () => dispatch(logout()),
//   })
// )(PokemonList);

export default PokemonList;
