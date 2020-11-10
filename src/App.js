import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./AuthProvider";
import Pokedex from "./components/Pokedex";
import client from "./apollo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <ApolloProvider client={client}>
          <Router>
            <Container>
              <Pokedex />
            </Container>
          </Router>
        </ApolloProvider>
      </AuthProvider>
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
