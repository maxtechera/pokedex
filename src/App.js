import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Pokedex />
        </Container>
      </Router>
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
