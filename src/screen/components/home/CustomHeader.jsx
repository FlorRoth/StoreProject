import { StyleSheet, Text, View } from 'react-native';
import { CustomLogo } from "../ui/CustomLogo.jsx";

export const CustomHeader = ({ tittle, subTittle }) => {
  return (
    <View style={styles.header}>
      <CustomLogo width={240} height={240} />
      <View style={styles.welcome}>
        <Text style={styles.text}>{tittle}</Text>
        <Text style={styles.subText}>
          {subTittle}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  welcome: {
    flex: 1,
    width: "90%",
  },
  text: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 8,
  },
  subText: {
    color: "#aaa",
    fontSize: 16,
  },
});