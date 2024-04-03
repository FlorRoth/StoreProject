import { createStackNavigator } from "@react-navigation/stack";
import PageNotFound from "../404Screen.jsx";
import { BottomTabs } from "./BottomTabs.jsx";
import LoginScreen from "../LoginScreen.jsx";
import SignUpScreen from "../SignUpScreen.jsx";
import SuccessfulScreen from "../SuccessfulScreen.jsx";
import Categories from "../CategoriesScreen.jsx";
import Products from "../ProductsScreen.jsx";
import ProductItem from "../ProductItemScreen.jsx";

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
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#ffff",
            elevation: 0,
          },
        }}
        name="SuccessfulScreen"
        component={SuccessfulScreen}
      />
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#ffff",
            elevation: 0,
          },
        }}
        name="ProductItem"
        component={ProductItem}
      />
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#ffff",
            elevation: 0,
          },
        }}
        name="Products"
        component={Products}
      />
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#ffff",
            elevation: 0,
          },
        }}
        name="PageNotFound"
        component={PageNotFound}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "",
          headerStyle: {
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};
