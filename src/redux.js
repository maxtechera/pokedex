import { createStore, combineReducers } from "redux";
import { reducer as pokemonsReducer } from "./redux/pokemons";

const initialState = {
  trainer: null,
};

const LOGIN = "Auth/LOGIN";
const LOGOUT = "Auth/LOGOUT";

export const login = trainer => ({
  type: LOGIN,
  trainer,
});

export const logout = () => ({
  type: LOGOUT,
});

export const trainerSelector = state => state.auth.trainer;

export const authReducer = (state = initialState, action) => {
  if (action.type === LOGIN) {
    return {
      ...state,
      trainer: action.trainer,
    };
  }
  if (action.type === LOGOUT) {
    return {
      ...state,
      trainer: null,
    };
  }
  return state;
};

const reducer = combineReducers({
  auth: authReducer,
  pokemons: pokemonsReducer,
});

export const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
