import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export const CarouselCategoriesCards = ({ image,title }) => {
  return (
    <TouchableOpacity>
      <View style={styles.categoriesButton}>

        <Image
          style={{ width: '100%', height: '100%',borderRadius:20}}
          source={{ uri: image }}
        />
        <Text>{title}</Text>
      </View>
      

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoriesButton: {
    flexDirection: "column",
    margin:3,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    shadowColor: "black",
    height: 150,
    width: 150,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
