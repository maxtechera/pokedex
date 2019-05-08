import gql from 'graphql-tag';

const GET_POKEMONS = gql`
  query GetPokemons($id: ID!) {
    pokemon(id: $id) {
      id
      name
      imageUrl
      description
    }
  }
`;

export default GET_POKEMONS;
