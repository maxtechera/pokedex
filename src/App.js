import React, { Component } from "react";
import styled from "styled-components";
import Pokedex from "./components/Pokedex";
import "./App.css";
import withApp from "./core/withApp";

class App extends Component {
  render() {
    return (
      <Container>
        <Pokedex {...this.props} />
      </Container>
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
