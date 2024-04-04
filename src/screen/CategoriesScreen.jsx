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
import { useNavigation } from "@react-navigation/native";
import { RenderProductsItem } from "./components/products/CustomProductsRenderItem";

export default Categories = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const { state, getProducts, getCategories, toggleFavorite } =
    useContext(ProductContext);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    getProducts();
    getCategories();
  };

  const productsByCategorie = (categorie) => {
    const products = state.products;
    return products.filter((producto) => producto.category === categorie);
  };
  return (
    <View style={{ flex: 1 }}>
      {state.isLoading ? (
        <ActivityIndicator size="large" color="#000000" />
      ) : (
        <View style={productsStyles.productsContainer}>
          <View style={productsStyles.headerContainer}>
            <TouchableOpacity>
              <Image
                style={{ height: 35, width: 35 }}
                source={require("../../assets/arrow.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ height: 22, width: 22 }}
                source={require("../../assets/search.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={globalStyles.titleStyle}>Productos de {item} </Text>
            <FlatList
              contentContainerStyle={productsStyles.listProductsContainer}
              data={productsByCategorie(item)}
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
    </View>
  );
};
