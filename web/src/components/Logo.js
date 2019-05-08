// @flow
import React from "react";
import styled from "styled-components";
import pokemonLogo from "../poke.png";

const Logo = styled.img.attrs({
  src: pokemonLogo,
})`
  width: 200px;
  opacity: 0.5;
  margin: auto;
`;
export default Logo;
