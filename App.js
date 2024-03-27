import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ProductProvider } from "./src/providers/ProductProvider";
import { BottomTabs } from "./src/screen/navigations/BottomTabs";
import { FormProvider } from "./src/providers/FormProvider";
import { StackNavigators } from "./src/screen/navigations/StackNavigators";

export default function App() {
  return (
    <NavigationContainer>
      <FormProvider>
        <ProductProvider>
          <StackNavigators>
            <BottomTabs />
          </StackNavigators>
        </ProductProvider>
      </FormProvider>
    </NavigationContainer>
  );
}
