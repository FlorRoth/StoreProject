import "react-native-gesture-handler";
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
} from "react-native";
import { HomeScreen } from "./src/screen/HomeScreen";
import { Navbar } from "./src/components/navigation/navbar";
import { Header } from "./src/components/navigation/header";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigators } from "./src/screen/navigations/StackNavigators";
import { ProductProvider } from "./src/providers/ProductProvider";
import { BottomTabs } from "./src/screen/navigations/BottomTabs";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar />
        <SafeAreaView style={styles.container}>
        <ProductProvider>
            <BottomTabs/>
          </ProductProvider>
        </SafeAreaView>
      </View>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
