import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FormContext } from "../contexts/FormContext";
import { useContext } from "react";
const PageNotFound = () => {
  const { theme } = useContext(FormContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme == "dark" ? "#212121" : "#fff",
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme == "dark" ? "#fff" : "#000",
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>404 - Page Not Found</Text>
    </View>
  );
};

export default PageNotFound;
