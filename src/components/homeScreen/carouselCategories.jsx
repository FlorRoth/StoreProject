import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { CarouselCategoriesCards } from "./carouselCategoriesCards";
import { ProductContext } from '../../contexts/ProductContext';


export const CarouselCategories = ({ name, dataProduct }) => {
  

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>{name.toUpperCase()}</Text>
    
      <FlatList
        data={dataProduct}
        renderItem={({ item }) => (
          <CarouselCategoriesCards item={item}  />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "black",
    height: 280,
    width: "100%",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    justifyContent: "space-evenly",
    alignItems: "left",
    marginTop:20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    padding:5,
    textAlignVertical:'auto'
  },
});
