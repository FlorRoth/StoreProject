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
      <Stack.Screen name="Home" component={HomeScreen}
      options={{
        title: "",
        headerStyle: {
          elevation: 0,
        },
      }} />
      <Stack.Screen name="Products" component={Products}
      options={{
        title: "",
        headerStyle: {
          elevation: 0,
        },
      }} />
      <Stack.Screen name="Categories" component={Categories}
      options={{
        title: "",
        headerStyle: {
          elevation: 0,
        },
      }} />

      <Stack.Screen name="ProductItem" component={ProductItem} 
      options={{
        title: "",
        headerStyle: {
          elevation: 0,
        },
      }}/>
      <Stack.Screen name="PageNotFound" component={PageNotFound} options={{
          title: "",
          headerStyle: {
            elevation: 0,
          },
        }}/>

    </Stack.Navigator>
  );
};
