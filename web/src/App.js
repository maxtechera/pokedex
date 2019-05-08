import React, { Component } from "react";
import styled from "styled-components";
import Pokedex from "./components/Pokedex";

import { Provider } from "react-redux";

import "./App.css";
import { store } from "./redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Pokedex />
        </Container>
      </Provider>
    );
  }
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
