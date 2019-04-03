import { createStore } from "redux";

const initialState = {
  pokemons: [],
  selectedId: 1,
  selectedPokemon: null,
};

export const SET_POKEMONS = "App/SET_POKEMONS";
export const SET_SELECTED_ID = "App/SET_SELECTED_ID";
export const SELECT_POKEMON = "App/SELECT_POKEMON";

export const setPokemons = pokemons => ({
  type: SET_POKEMONS,
  payload: { pokemons },
});

export const selectPokemon = pokemon => ({
  type: SELECT_POKEMON,
  payload: { pokemon },
});

export const setSelectedId = selectedId => ({
  type: SET_SELECTED_ID,
  payload: { selectedId },
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload.pokemons };
    case SELECT_POKEMON:
      return { ...state, selectedPokemon: action.payload.pokemon };
    case SET_SELECTED_ID:
      return { ...state, selectedPokemon: null, selectedId: action.payload.selectedId };
    default:
      return state;
  }
};

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default reducer;
