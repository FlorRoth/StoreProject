import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import ProductItem from "../ProductItemScreen";
import Products from "../ProductsScreen"
import { HomeScreen } from "../HomeScreen";
import Categories from "../CategoriesScreen.jsx";
import PageNotFound from "../404Screen.jsx"

const Stack = createStackNavigator();

export const StackNavigators = () => {
  return (
    <Stack.Navigator
     screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'black',
        headerStyle: { backgroundColor: 'white' },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Categories" component={Categories} />

      <Stack.Screen name="ProductItem" component={ProductItem} />
      <Stack.Screen name="PageNotFound" component={PageNotFound} />

    </Stack.Navigator>
  );
};
