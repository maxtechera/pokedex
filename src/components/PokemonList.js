// @flow
import React from "react";
import styled from "styled-components";

type Props = {};
const PokemonList = ({  }: Props) => {
  const pokemons = [
    { id: 1, name: "Bulbasur", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" },
  ];
  return (
    <Container>
      <List>
        <Item>
          <Image src={pokemons[0].image} />
          <Name>{pokemons[0].name}</Name>
        </Item>
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
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
  :first-child {
    background: rgba(255, 255, 255, 0.3);
  }
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
