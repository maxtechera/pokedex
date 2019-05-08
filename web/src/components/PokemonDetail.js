// @flow
import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import GET_POKEMON from '../core/GET_POKEMON';

import Logo from './Logo';

type Props = {};
const PokemonDetail = ({ selectedId }: Props) => (
  <Query query={GET_POKEMON} variables={{ id: selectedId }}>
    {({ data, loading, error }) => {
      if (loading) return <Logo />;
      if (error) return `Error! ${error.message}`;
      const { pokemon } = data;
      return (
        <Container>
          <PokemonImage src={pokemon.imageUrl} />
          <Row>
            <Name>{pokemon.name}</Name>
            <Number>{`# ${pokemon.id}`}</Number>
          </Row>
          <Row>
            <Description>{pokemon.description}</Description>
          </Row>
        </Container>
      );
    }}
  </Query>
);

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
const Name = styled.h2`
  font-size: 30px;
  color: white;
  margin: 0;
  text-transform: capitalize;
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
