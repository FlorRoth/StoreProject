import { StyleSheet, Text, View } from "react-native";


export const CustomInfo = ({ left, right }) => {

  return (
    <View style={styles.customInfo}>
      <Text style={styles.left}>{left}</Text>
      <Text style={styles.right}>{right}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  customInfo: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
    color: "#999",
    fontSize: 16,
    fontWeight: "500",
  },
  right: {
    flex: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    marginBottom: 4,
    paddingLeft: 16,
    fontSize: 16,
    fontWeight: "500",
  },
});
