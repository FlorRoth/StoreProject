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
import { CategoeriesScreen } from "./src/screen/CategoriesScreen";
import { Header } from "./src/components/navigation/header";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigators } from "./src/screen/navigations/StackNavigators";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <Header />
            <StackNavigators/>
          <Navbar />
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
