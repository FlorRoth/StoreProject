import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Products from "../ProductsScreen";
import PageNotFound from "../404Screen.jsx";
import Ionicons from "@expo/vector-icons/Ionicons";
import AuthScreen from "../AuthScreen.jsx";
import ProfileScreen from "../ProfileScreen.jsx";
import { HomeScreen } from "../HomeScreen.jsx";
import { FormContext } from "../../contexts/FormContext.jsx";
import { useContext, useState, useEffect } from "react";
import Cart from "../CartScreen.jsx";

const Tab = createBottomTabNavigator();
export const BottomTabs = () => {
  const { state, theme } = useContext(FormContext);

  const [iconColor, seticonColor] = useState("black");

  useEffect(() => {
    if (theme == "dark") {
      seticonColor("white");
    } else seticonColor("black");
  }, [theme]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme == "dark" ? "#212121" : "white",
          height: 80,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          color: theme == "dark" ? "white" : "black",
          fontSize: 10,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={32}
              color={focused ? iconColor : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="pricetags"
              size={32}
              color={focused ? iconColor : "grey"}
            />
          ),
        }}
      />
      {state.isLogged ? (
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="person"
                size={30}
                color={focused ? iconColor : "grey"}
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
                color={focused ? iconColor : "grey"}
              />
            ),
          }}
        />
      )}

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="cart"
              size={30}
              color={focused ? iconColor : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
