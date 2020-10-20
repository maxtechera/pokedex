// @flow
import React from "react";
import styled from "styled-components";

type Props = {};

const getImageURL = id =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${`${id}`.padStart(
    3,
    "0"
  )}.png`;

const fetchPokemon = ({ id }) =>
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`, {
    method: "GET",
    headers: {}
  })
    .then(res => res.json())
    .then(pokemon => ({
      id,
      name: pokemon.name,
      image: getImageURL(id),
      description: pokemon.flavor_text_entries.find(
        ({ language: { name } }) => name === "en"
      ).flavor_text
    }));

const PokemonDetail = ({ pokemonId }: Props) => {
  const [pokemon, setPokemon] = React.useState();

  React.useEffect(() => {
    fetchPokemon({ id: pokemonId }).then(response => {
      setPokemon(response);
    });
  }, [pokemonId]);

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
