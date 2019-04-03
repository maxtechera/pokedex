import React from "react";

import { storiesOf } from "@storybook/react";
import { Login, Pokedex, PokedexLogin, PokemonDetail, PokemonList } from "../components";

storiesOf("Pokedex", module).add("pokedex login", () => <PokedexLogin />);
storiesOf("Pokedex", module).add("pokedex", () => <Pokedex />);
storiesOf("Pokedex", module).add("login", () => <Login />);
storiesOf("Pokedex", module).add("detail", () => <PokemonDetail />);
storiesOf("Pokedex", module).add("list", () => <PokemonList />);
