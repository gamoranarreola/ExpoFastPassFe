import "react-native-gesture-handler";
import React from "react";
import {
  DefaultTheme,
  PaperProvider
} from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./src/components/Main";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import DrawerNav from "./src/components/DrawerNav";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme
};

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Main" component={Main} />
              <Stack.Screen name="DrawerNav" component={DrawerNav} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
