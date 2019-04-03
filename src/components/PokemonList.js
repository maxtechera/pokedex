// @flow
import React from "react";
import styled from "styled-components";
import withPokemons from "../core/withPokemons";
type Props = {
  pokemons?: Array,
};

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

const PokemonList = ({ selectedId, setSelectedId, pokemons = [] }: Props) => {
  return (
    <Container>
      <List>
        {pokemons.map((pokemon, idx) => (
          <Item selected={selectedId == idx + 1} onClick={() => setSelectedId(idx + 1)}>
            <Image src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad(idx + 1, 3)}.png`} />
            <Name>{`#${pad(idx + 1, 3)} ${pokemon.name}`}</Name>
          </Item>
        ))}
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
  padding: 8px 8px;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;

const Item = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 8px;
  text-transform: capitalize;
  ${props =>
    props.selected &&
    `
    background: rgba(255, 255, 255, 0.3);
  `}
`;

const Image = styled.img`
  width: 100%;
  padding: 0px 16px;
  object-fit: cover;
`;

const Name = styled.p`
  color: white;
  font-size: 15px;
  text-align: center;
  width: 100%;
`;

export default withPokemons(PokemonList);
