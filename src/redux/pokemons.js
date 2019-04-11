const initialState = {
  pokemons: [],
  loading: false,
  error: "",
};

export const FETCH_PKS = "Pokemon/FETCH_PKS";
export const FETCH_PKS_SUCCESS = "Pokemon/FETCH_PKS_SUCCESS";
export const FETCH_PKS_ERROR = "Pokemon/FETCH_PKS_ERROR";

export const fetchPokemons = (limit = 151) => ({
  type: FETCH_PKS,
  payload: {
    limit,
  },
});

export const fetchPokemonsSuccess = pokemons => ({
  type: FETCH_PKS_SUCCESS,
  payload: {
    pokemons,
  },
});

export const fetchPokemonsError = error => ({
  type: FETCH_PKS_ERROR,
  payload: {
    error,
  },
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PKS:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case FETCH_PKS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload.pokemons,
        loading: false,
      };
    case FETCH_PKS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export const loadingSelector = state => state.pokemons.loading;
export const pokemonsSelector = state => state.pokemons.pokemons;
