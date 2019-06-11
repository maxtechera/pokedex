import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
