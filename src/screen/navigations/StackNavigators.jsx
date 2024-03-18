import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import ProductItem from "../ProductItemScreen";
import { HomeScreen } from "../HomeScreen";
import Products from "../ProductsScreen";

const Stack = createStackNavigator();

export const StackNavigators = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductItem" component={ProductItem} />

    </Stack.Navigator>
  );
};
