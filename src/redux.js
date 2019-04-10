import { createStore } from "redux";

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

export const reducer = (state = initialState, action) => {
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

export const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
