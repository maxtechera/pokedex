import gql from 'graphql-tag';

const GET_POKEMONS = gql`
  query GetPokemons($limit: Int) {
    pokemons(limit: $limit) {
      id
      name
      imageUrl
      description
    }
  }
`;

export default GET_POKEMONS;
