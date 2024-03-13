import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { Navbar } from "../components/navigation/navbar";
import { Header } from "../components/navigation/header";
import { CarouselCategories } from "../components/homeScreen/carouselCategories";
const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
const RecommendedMovies = [
  {
    id: 2,
    titleMovie: "Rapido y Furioso 2",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    titleMovie: "Rapido y Furioso 3",
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 4,
    titleMovie: "Rapido y Furioso 4",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 5,
    titleMovie: "Rapido y Furioso 5",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 1,
    titleMovie: "Rapido y Furioso 1",
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
];

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
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
      <View>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CarouselCategories name={item} dataProduct={RecommendedMovies} />
          )}
          keyExtractor={(item) => item.id}
          style={{ paddingHorizontal: 10 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
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
