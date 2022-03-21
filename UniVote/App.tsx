import React, {useState} from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";
import { createStore } from "redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./components/pages/signUp/signUp";
import LoginScreen from "./components/pages/login/login";

const store = createStore(rootReducer, composeWithDevTools());

const Stack = createStackNavigator();

const loadFonts = () => {
  return Font.loadAsync({
    SemiBoldFont: require("./fonts/sf-pro-text-semi-bold.ttf"),
    RegularFont: require("./fonts/sf-pro-text-regular.ttf"),
    HeavyFont: require("./fonts/sf-pro-text-heavy.ttf"),
    LightFont:require("./fonts/sf-pro-text-light.ttf"),
    BoldFont:require("./fonts/sf-pro-text-bold.ttf"),
    OswlandBoldFont:require("./fonts/Oswald-Bold.ttf")

  });
};



export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
   if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}