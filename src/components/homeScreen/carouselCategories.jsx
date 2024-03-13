import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,FlatList
  } from "react-native";
  import { CarouselCategoriesCards } from './carouselCategoriesCards';


  const RecommendedMovies = [
    { id: 2, titleMovie: 'Rapido y Furioso 2', img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
    { id: 3, titleMovie: 'Rapido y Furioso 3', img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    { id: 4, titleMovie: 'Rapido y Furioso 4', img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
    { id: 5, titleMovie: 'Rapido y Furioso 5', img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
    { id: 1, titleMovie: 'Rapido y Furioso 1', img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
  ]

  export const CarouselCategories = () => {
  return (
    <View style={styles.container}>
    <Text>Categorias</Text>

    <FlatList 
        data={RecommendedMovies}
        renderItem={({item}) => <CarouselCategoriesCards image={item.img} title={item.titleMovie}/>}
        keyExtractor={item => item.id}
        horizontal
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      top: 70,
      padding:5,
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      shadowColor: "black",
      height: 200,
      width: "100%",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.7,
      shadowRadius: 2,
      justifyContent: "space-evenly",
      alignItems: "left",
    },
 
  });
  
