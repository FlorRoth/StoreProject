import { createStackNavigator } from "@react-navigation/stack";
import PageNotFound from "../404Screen.jsx"
import { BottomTabs } from "./BottomTabs.jsx";
import LoginScreen from "../LoginScreen.jsx";
import SignUpScreen from "../SignUpScreen.jsx";
import SuccessfulScreen from "../SuccessfulScreen.jsx";
import Products from "../ProductsScreen.jsx";
import ProductItemScreen from "../ProductItemScreen.jsx"

const Stack = createStackNavigator();

export const StackNavigators = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          headerShown: false,
          title: "",
          headerStyle: {
            backgroundColor: "#ffff",
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#ffff",
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#ffff",
            elevation: 0,
          },
        }}
      />
      <Stack.Screen name="SuccessfulScreen" component={SuccessfulScreen} />
      <Stack.Screen name="ProductItemScreen" component={ProductItemScreen} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="PageNotFound" component={PageNotFound} />
    </Stack.Navigator >
  );
};
