import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ProductProvider } from "./src/providers/ProductProvider";
import { BottomTabs } from "./src/screen/navigations/BottomTabs";
import { FormProvider } from "./src/providers/FormProvider";
import StackNavigatorsAuth from "./src/screen/navigations/StackNavigatorsAuth";

export default function App() {
  return (
    <NavigationContainer>
      <FormProvider>
        <View style={styles.container}>
          <StatusBar />
          <SafeAreaView style={styles.container}>
            <ProductProvider>
              <BottomTabs>
                <StackNavigatorsAuth />
              </BottomTabs>
            </ProductProvider>
          </SafeAreaView>
        </View>
      </FormProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
