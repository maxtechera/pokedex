import React, { Component } from "react";
import styled from "styled-components";
import { Provider } from "react-redux";

import withApp from "./core/withApp";
import { store } from "./core/redux";
import Pokedex from "./components/Pokedex";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Pokedex {...this.props} />
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

export default withApp(App);
