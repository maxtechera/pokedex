import React from "react";
import styled from "styled-components";
import Login from "./Login";
import PokemonDetail from "./PokemonDetail";
import PokemonList from "./PokemonList";
import Logo from "./Logo";

// https://pokeapi.co/
export const Pokedex = ({}) => {
  const [user, setUser] = React.useState({
    name: "Max"
  });
  return (
    <Container>
      <LeftContainer>
        {!user ? <Login setUser={setUser} /> : <PokemonList />}
      </LeftContainer>
      <InnerContainer>
        <DisplayContainer>
          {!user ? <Logo /> : <PokemonDetail />}
        </DisplayContainer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 80vh;
  width: 90vw;
  max-height: 700px;
  max-width: 1000px;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 0 20px #000000;
`;

const DisplayContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #282c34;
  box-shadow: inset 0 0 10px rgb(0, 0, 0, 0.8);
  border-radius: 5px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
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
  border-radius: 0px 10px 0px 0px;
`;

const LeftContainer = styled(InnerContainer)`
  background: #bf3027;
  border-radius: 10px 0px 0px 10px;
`;

export default Pokedex;
