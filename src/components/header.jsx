import React from "react";
import {
  Alert,
  Pressable,
  View,
  Image,
  StyleSheet,
} from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.imgs}
        onPress={() => Alert.alert("menu pressed")}
      >
        <Image source={require("../../assets/header/menu.png")} />
      </Pressable>

      <Pressable
        style={styles.imgs}
        onPress={() => Alert.alert("avatar pressed")}
      >
        <Image source={require("../../assets/header/avatar.png")} />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    top: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    shadowColor: "black",
    height: 50,
    width: "100%",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgs: {
    marginHorizontal: 40,
  },
});
