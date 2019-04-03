import { createStore } from "redux";

const initialState = {
  pokemons: [],
  selectedPokemon: null,
};

export const SET_POKEMONS = "App/SET_POKEMONS";
export const SELECT_POKEMON = "App/SELECT_POKEMON";

export const setPokemons = pokemons => ({
  type: SET_POKEMONS,
  payload: { pokemons },
});

export const selectedPokemon = pokemon => ({
  type: SET_POKEMONS,
  payload: { pokemon },
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload.pokemons };
    case SELECT_POKEMON:
      return { ...state, selectedPokemon: action.payload.pokemon };
    default:
      return state;
  }
};

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default reducer;
