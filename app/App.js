import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PokemonDetail from "./components/PokemonDetail";
import PokemonList from "./components/PokemonList";
import Login from "./components/Login";
import client from "./apollo";
import AuthProvider, { useToken } from "./AuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <RootNavigation />
      </ApolloProvider>
    </AuthProvider>
  );
}

const RootNavigation = () => {
  const { token } = useToken();
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
      <Stack.Navigator initialRouteName="Home">
        {token ? (
          <>
            <Stack.Screen name="Home" component={PokemonList} />
            <Stack.Screen name="Detail" component={PokemonDetail} />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              header: () => null
            }}
          />
        )}
      </Stack.Navigator>
      {/* </View> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
