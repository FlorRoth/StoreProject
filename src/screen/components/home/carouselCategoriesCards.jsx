import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export const CarouselCategoriesCards = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity   onPress={()=>navigation.navigate("ProductItem", { item: item })}>
      <View style={styles.categoriesButton}>
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 20 }}
          source={{ uri: item.image }}
        />
        <Text  numberOfLines={2} ellipsizeMode="tail"  style={styles.text}>{item.title}</Text>

        <Text style={styles.textPrice}>{`$${item.price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  categoriesButton: {
    flexDirection: "column",
    margin: 3,
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
  text: {
    fontWeight: "bold",
    fontSize: 10,
    padding: 5,
    textAlign: "center",
  },
  textPrice: {
    fontWeight: "300",
    fontSize: 18,
    padding: 2,
  },
});
