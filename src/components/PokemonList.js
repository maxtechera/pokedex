// @flow
import React from "react";
import styled, { css } from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const POKEMONS_QUERY = gql`
  query AllPokemons {
    pokemons {
      id
      name
      image
    }
  }
`;

const PokemonList = ({}) => {
  const match = useRouteMatch("/pokemon/:pokemonId");
  const { data: { pokemons = [] } = {} } = useQuery(POKEMONS_QUERY);
  return (
    <DisplayContainer>
      <List>
        {pokemons.map(pokemon => (
          <Link to={`/pokemon/${pokemon.id}`}>
            <Item
              key={pokemon.id}
              selected={pokemon.id == match?.params?.pokemonId}
            >
              <Image src={pokemon.image} />
              <Name>{pokemon.name}</Name>
            </Item>
          </Link>
        ))}
      </List>
    </DisplayContainer>
  );
};

const DisplayContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #282c34;
  box-shadow: inset 0 0 10px rgb(0, 0, 0, 0.8);
  border-radius: 5px;
  overflow: auto;
`;
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
  padding: 16px 16px;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;

const Item = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 8px;
  ${props =>
    props.selected &&
    css`
      background: rgba(255, 255, 255, 0.4);
    `}
`;

const Image = styled.img`
  width: 100%;
  padding: 0px 16px;
  object-fit: cover;
`;

const Name = styled.p`
  color: white;
  font-size: 16px;
  text-align: center;
  width: 100%;
`;

export default PokemonList;
