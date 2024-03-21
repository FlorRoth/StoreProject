import * as React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../HomeScreen";
import { StackNavigators } from "./StackNavigators";
import { useNavigation } from "@react-navigation/native";
import Products from "../ProductsScreen";
import PageNotFound from "../404Screen.jsx";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";


const Tab = createBottomTabNavigator();
export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height:80,
          paddingTop:10
        },
        tabBarLabelStyle: {
          color: "black",
          fontSize: 10,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="inicio"
        component={StackNavigators}
        options={{
          tabBarIcon: ({focused}) => <Ionicons name="home" size={32} color={focused ? "black" : "grey"} />,
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name="pricetags" size={32} color={focused ? "black" : "grey"} />
          ),
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={PageNotFound}
        options={{
          tabBarIcon: ({focused}) => <Ionicons name="options" size={32} color={focused ? "black" : "grey"} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={PageNotFound}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name="person" size={30} color={focused ? "black" : "grey"} />
          )
        }}
      />
      <Tab.Screen
        name="Carrito"
        component={PageNotFound}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name="cart" size={30} color={focused ? "black" : "grey"} />
          )
        }}
      />
    </Tab.Navigator>
  );
};
