// @flow
import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import GET_POKEMONS from '../core/GET_POKEMONS';
import { connect } from 'react-redux';
import { logout } from '../redux';
type Props = {};
const PokemonList = ({ doLogout, pokemons = [], selectedId, setSelectedId }: Props) => {
  return (
    <Container>
      <button onClick={doLogout}>Logout</button>
      <Query query={GET_POKEMONS}>
        {({ loading, error, data }) =>
          loading ? (
            'Loading...'
          ) : (
            <List>
              {data.pokemons.map(pokemon => (
                <Item
                  selected={selectedId == pokemon.id}
                  key={pokemon.id}
                  onClick={() => setSelectedId(pokemon.id)}
                >
                  <Image src={pokemon.imageUrl} />
                  <Name>{pokemon.name}</Name>
                </Item>
              ))}
            </List>
          )
        }
      </Query>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: end;
  padding: 16px 16px;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;

const Item = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 8px;
  transition: 0.3s;
  background: rgba(255, 255, 255, 0);
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  ${props =>
    props.selected &&
    `
  background:rgba(255,255,255,0.3);
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
  text-transform: capitalize;
`;

export default connect(
  null,
  dispatch => ({
    doLogout: () => dispatch(logout()),
  }),
)(PokemonList);
