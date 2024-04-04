import { RenderProductsItem } from "./components/products/CustomProductsRenderItem";
import { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { productsStyles } from "../styles/productsStyles";
import { globalStyles } from "../styles/globalStyles";
import { ProductContext } from "../contexts/ProductContext";

export default function Products() {
  const { state, getProducts, toggleFavorite } = useContext(ProductContext);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    getProducts();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {state.isLoading ? (
        <ActivityIndicator size="large" color="#000000" />
      ) : (
        <View style={productsStyles.productsContainer}>
          <View style={productsStyles.headerContainer}>
            <TouchableOpacity>
              <Image
                style={{ height: 22, width: 22 }}
                source={require("../../assets/search.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={globalStyles.titleStyle}>Productos</Text>
            <FlatList
              contentContainerStyle={productsStyles.listProductsContainer}
              data={state.products}
              horizontal={false}
              numColumns={2}
              keyExtractor={(item) => {
                return item.id;
              }}
              renderItem={({ item }) => (
                <RenderProductsItem
                  item={item}
                  state={state}
                  toggleFavorite={toggleFavorite}
                />
              )}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
