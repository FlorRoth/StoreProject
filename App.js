import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/screen/HomeScreen';
export default function App() {
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      <HomeScreen/>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C8C8C',
  },
});
