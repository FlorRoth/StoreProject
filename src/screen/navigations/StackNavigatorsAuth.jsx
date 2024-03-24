import LoginScreen from "../LoginScreen";
import SignUpScreen from "../SignUpScreen";
import SuccessfulScreen from "../SuccessfulScreen";
import AuthScreen from "../AuthScreen";
import { createStackNavigator } from "@react-navigation/stack";

export default function StackNavigatorsAuth() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{
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
    </Stack.Navigator>
  );
}