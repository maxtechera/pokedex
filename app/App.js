import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./AppNavigator";
import { client } from "./apollo";
import { ApolloProvider } from "react-apollo";

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}
