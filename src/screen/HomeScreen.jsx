import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { ProductContext } from "../contexts/ProductContext";

import { useContext, useEffect, useState } from "react";

import { CarouselCategories } from "./components/home/carouselCategories";

export const HomeScreen = () => {
  const { state, getProducts, getCategories, toggleFavorite } =
    useContext(ProductContext);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    getCategories();
    getProducts();
  };

  const productsByCategorie = (categorie) => {
    const products = state.products;
    return products.filter((producto) => producto.category === categorie);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={state.categories}
        ListHeaderComponent={() => (
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>Bienvenido,</Text>
            <Text style={styles.subTitle}>KWIK-E-MART</Text>
            <Image
              style={{ width: "100%", height: 150 }}
              source={require("../../assets/Logo.png")}
            />

            <Text style={styles.categoriesTitle}>Productos Populares</Text>
            <Text style={styles.categoriesSubtitle}>Por Categoria</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <CarouselCategories
            name={item}
            dataProduct={productsByCategorie(item)}
          />
        )}
        
        keyExtractor={(item) => item}
        style={{ paddingHorizontal: 10 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  welcomeContainer: {
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  welcomeTitle: {
    fontWeight: "bold",
    fontSize: 25,
    paddingHorizontal: 2,
    alignSelf: "center",
  },
  subTitle: {
    color: "#666666",
    fontWeight: "bold",
    fontSize: 25,
    paddingHorizontal: 2,
    alignSelf: "center",
  },
  categoriesTitle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 2,
    alignSelf: "center",
  },
  categoriesSubtitle: {
    color: "#666666",
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 2,
    alignSelf: "center",
  },
});
