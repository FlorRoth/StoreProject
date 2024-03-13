import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import { CategoeriesScreen } from "../CategoriesScreen";
import { HomeScreen } from "../HomeScreen";

const Stack = createStackNavigator();

export const StackNavigators = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Categories" component={CategoeriesScreen} />
    </Stack.Navigator>
  );
};
