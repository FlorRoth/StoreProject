import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { FormContext } from "../../../contexts/FormContext";
export const CustomInfo = ({ left, right }) => {
  const { theme } = useContext(FormContext);

  return (
    <View
      style={[
        styles.customInfo,
        { backgroundColor: theme == "dark" ? "#212121" : "white" },
      ]}
    >
      <Text
        style={[
          styles.left,
          { color: theme == "dark" ? "#f2f8ff" : "#212121" },
        ]}
      >
        {left}
      </Text>
      <Text
        style={[
          styles.right,
          { color: theme == "dark" ? "#f2f8ff" : "#212121" },
        ]}
      >
        {right}
      </Text>
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
