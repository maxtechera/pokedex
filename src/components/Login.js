// @flow
import React from "react";
import styled from "styled-components";

type Props = {};
const PokemonDetail = ({  }: Props) => (
  <Container>
    <Inner>
      <Title>React Pokédex</Title>
      <Input placeholder="Trainer name" />
      <Input placeholder="Password" type="password" />
      <Button>Login</Button>
    </Inner>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #282c34;
  box-shadow: inset 0 0 10px rgb(0, 0, 0, 0.8);
  border-radius 5px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
  color: white;
  text-align: center;
  opacity: 0.9;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  width: 100%;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  margin-bottom: 16px;
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);

  color: white;
`;

const Button = styled.button`
  font-size: 18px;
  width: 100%
  padding: 8px 32px;
  border-radius: 5px;
  border: none;
  margin: auto;
  margin-top: 16px;
`;

export default PokemonDetail;
