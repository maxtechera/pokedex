// @flow
import React from "react";
import styled from "styled-components";

type Props = {};

const fetchPokemons = () =>
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=150", {
    method: "GET",
    headers: {}
  }).then(res => res.json());

const PokemonList = ({  }: Props) => {
  const [pokemons, setPokemons] = React.useState([]);
  React.useEffect(() => {
    fetchPokemons().then(response => {
      const { results } = response;
      setPokemons(
        results.map((item, idx) => ({
          id: idx + 1,
          name: item.name,
          image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${`${idx +
            1}`.padStart(3, "0")}.png`
        }))
      );
    });
  }, []);
  return (
    <DisplayContainer>
      <List>
        {pokemons.map(pokemon => (
          <Item key={pokemon.id}>
            <Image src={pokemon.image} />
            <Name>{pokemon.name}</Name>
          </Item>
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
