import React from "react";
import {
  Alert,
  Pressable,
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";

export const Navbar = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.imgs, { flexDirection: "row" }]}
        onPress={() => Alert.alert("home pressed")}
      >
        <Image source={require("../../../assets/navbar/home.png")} />
        <View style={styles.text}>
          <Text>Home</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.imgs}
        onPress={() => Alert.alert("cart pressed")}
      >
        <Image source={require("../../../assets/navbar/cart.png")} />
      </Pressable>
      <Pressable
        style={styles.imgs}
        onPress={() => Alert.alert("notification pressed")}
      >
        <Image source={require("../../../assets/navbar/notification.png")} />
      </Pressable>
      <Pressable
        style={styles.imgs}
        onPress={() => Alert.alert("profile pressed")}
      >
        <Image source={require("../../../assets/navbar/profile.png")} />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position:"absolute",
    flexDirection: "row",
    bottom: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    shadowColor: "black",
    height: 70,
    width: "100%",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop:5,

  },
  imgs: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    left: -45,
    marginHorizontal: 2,
    backgroundColor: "#EEEEEE",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 200,
    borderStyle: "solid",
    fontSize: 15,
    padding: 10,
    paddingLeft: 48,
    zIndex: -1,
  },
});
