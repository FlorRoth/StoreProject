import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Navbar } from "../components/navigation/navbar";
import { Header } from "../components/navigation/header";
import {CarouselCategories} from "../components/homeScreen/carouselCategories";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CarouselCategories/>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "#ff1e1e",
    top: 20,
    left: 20,
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
});
