import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import { HomeScreen } from "./src/screen/HomeScreen";
import { Navbar } from "./src/components/navigation/navbar";
import { Header } from "./src/components/navigation/header";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView>
          <HomeScreen />
        </ScrollView>
        <Navbar />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
