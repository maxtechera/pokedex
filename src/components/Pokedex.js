// @flow
import React from "react";
import styled from "styled-components";
import withPokemons from "../core/withPokemons";
import Login from "./Login";
import PokemonDetail from "./PokemonDetail";
import PokemonList from "./PokemonList";
import pokemonLogo from "../poke.png";

type Props = {};

export const Pokedex = ({ pokemons, trainer, name, password, setName, setPassword, doLogin }: Props) => {
  return (
    <Container>
      <LeftContainer>
        <DisplayContainer>
          {trainer ? (
            <PokemonList pokemons={pokemons} />
          ) : (
            <Login name={name} password={password} setName={setName} setPassword={setPassword} doLogin={doLogin} />
          )}
        </DisplayContainer>
      </LeftContainer>
      <InnerContainer>
        <DisplayContainer>{trainer ? <PokemonDetail /> : <Logo src={pokemonLogo} />}</DisplayContainer>
      </InnerContainer>
    </Container>
  );
};

export const PokedexLogin = ({  }: Props) => (
  <Container>
    <LeftContainer>
      <Login />
    </LeftContainer>
    <InnerContainer>
      <DisplayContainer>
        <Logo src={pokemonLogo} />
      </DisplayContainer>
    </InnerContainer>
  </Container>
);

const Container = styled.div`
  height: 80vh;
  width: 90vw;
  max-height: 700px;
  max-width: 1000px;
  border-radius: 10px;
  display: flex;
`;

const DisplayContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #282c34;
  border-radius 5px;
  padding: 16px;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:auto;
  box-shadow: inset 0 0 10px rgb(0, 0, 0, 0.8);
`;
const InnerContainer = styled.div`
  height: 100%;
  width: 50%;
  background: #9c251c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 32px;
  border-radius: 10px;
  box-shadow: 0 0 20px #000000;
`;

const LeftContainer = styled(InnerContainer)`
  background: #bf3027;
  margin-right: -4px;
  box-shadow: 0 0 10px #000000;
  z-index: 99;
`;

const Logo = styled.img`
  width: 200px;
  opacity: 0.5;
  margin: auto;
`;

export default withPokemons(Pokedex);
