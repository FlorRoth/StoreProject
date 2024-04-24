import { createStackNavigator } from "@react-navigation/stack";
import PageNotFound from "../404Screen.jsx";
import { BottomTabs } from "./BottomTabs.jsx";
import LoginScreen from "../LoginScreen.jsx";
import SignUpScreen from "../SignUpScreen.jsx";
import SuccessfulScreen from "../SuccessfulScreen.jsx";
import Categories from "../CategoriesScreen.jsx";
import Products from "../ProductsScreen.jsx";
import ProductItemScreen from "../ProductItemScreen.jsx";
import PaymentScreen from "../PaymentScreen.jsx";
import Cart from "../CartScreen.jsx";
import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext.jsx";
const Stack = createStackNavigator();

export const StackNavigators = () => {
  const { theme } = useContext(FormContext);
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
            backgroundColor: theme == "dark" ? "#212121" : "white",
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
            backgroundColor: theme == "dark" ? "#212121" : "white",
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: theme == "dark" ? "#212121" : "white",
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
            backgroundColor: theme == "dark" ? "#212121" : "white",
            elevation: 0,
          },
        }}
        name="ProductsScreen"
        component={Products}
      />

      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: theme == "dark" ? "#212121" : "white",
            elevation: 0,
          },
        }}
        name="ProductItem"
        component={ProductItemScreen}
      />

      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: theme == "dark" ? "#212121" : "white",
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

            backgroundColor: theme == "dark" ? "#212121" : "white",
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={Cart}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: theme == "dark" ? "#212121" : "white",
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: theme == "dark" ? "#212121" : "white",
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};
