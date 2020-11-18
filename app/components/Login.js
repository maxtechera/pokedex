// @flow
import { gql, useMutation } from "@apollo/client";
import React from "react";
import styled from "styled-components/native";
import { useToken } from "../AuthProvider";
import USER_QUERY from "./USER_QUERY";

const SIGN_IN_MUTATION = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      username
      token
    }
  }
`;

const Login = ({ setUser }) => {
  const { setToken } = useToken();
  const [credentials, setCredentials] = React.useState({
    user: "",
    password: ""
  });
  const [doSignInMutation] = useMutation(SIGN_IN_MUTATION);

  const onLogin = async () => {
    const { username, password } = credentials;
    const { data } = await doSignInMutation({
      variables: {
        input: {
          username,
          password
        }
      }
    });
    const {
      signIn: { token }
    } = data;
    setToken(token);
  };

  return (
    <Container>
      <Inner>
        <Title>React Pokédex</Title>
        <Input
          placeholder="Trainer name"
          onChangeText={username =>
            setCredentials({
              ...credentials,
              username
            })
          }
        />
        <Input
          placeholder="Password"
          type="password"
          onChangeText={password =>
            setCredentials({
              ...credentials,
              password
            })
          }
        />
        <Button onPress={onLogin} title="Login" />
      </Inner>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #282c34;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  margin-bottom: 32px;
  color: white;
  text-align: center;
  opacity: 0.9;
`;
const Inner = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  width: 100%;
`;

const Input = styled.TextInput`
  padding: 8px;
  font-size: 14px;
  margin-bottom: 16px;
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  background: white;
  color: black;
`;

const Button = styled.Button`
  font-size: 18px;
  width: 100%;
  /* padding: 8px 32px; */
  border-radius: 5px;
  border: none;
  margin: auto;
  margin-top: 16px;
`;

export default Login;
