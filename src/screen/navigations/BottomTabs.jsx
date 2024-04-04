import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Products from "../ProductsScreen";
import PageNotFound from "../404Screen.jsx";
import Ionicons from "@expo/vector-icons/Ionicons";
import AuthScreen from "../AuthScreen.jsx";
import ProfileScreen from "../ProfileScreen.jsx";
import { HomeScreen } from "../HomeScreen.jsx";
import { FormContext } from "../../contexts/FormContext.jsx";
import { useContext } from "react";
import Cart  from "../CartScreen.jsx";

const Tab = createBottomTabNavigator();
export const BottomTabs = () => {
  const { state } = useContext(FormContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
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
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={32}
              color={focused ? "black" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Productos"
        component={Products}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="pricetags"
              size={32}
              color={focused ? "black" : "grey"}
            />
          ),
        }}
      />
      {state.isLogged ? (
        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="person"
                size={30}
                color={focused ? "black" : "grey"}
              />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="Login"
          component={AuthScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="person"
                size={30}
                color={focused ? "black" : "grey"}
              />
            ),
          }}
        />
      )}

      <Tab.Screen
        name="Carrito"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="cart"
              size={30}
              color={focused ? "black" : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
