import { createStore } from "redux";

const initialState = {
  trainer: null,
};

const LOGIN = "Auth/LOGIN";

export const login = trainer => ({
  type: LOGIN,
  trainer,
});

export const reducer = (state = initialState, action) => {
  if (action.type === LOGIN) {
    return {
      ...state,
      trainer: action.trainer,
    };
  }
  return state;
};

export const store = createStore(reducer);
