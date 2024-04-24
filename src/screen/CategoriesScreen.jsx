import { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { productsStyles } from "../styles/productsStyles";
import { globalStyles } from "../styles/globalStyles";
import { ProductContext } from "../contexts/ProductContext";
import { useNavigation } from "@react-navigation/native";
import { RenderProductsItem } from "./components/products/CustomProductsRenderItem";
import { FormContext } from "../contexts/FormContext";
export default Categories = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const { state, getProducts, getCategories, toggleFavorite } =
    useContext(ProductContext);

  const { theme } = useContext(FormContext);

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
    <View
      style={{
        flex: 1,
        backgroundColor: theme == "dark" ? "#212121" : "white",
        paddingHorizontal: 10,
      }}
    >
      {state.isLoading ? (
        <ActivityIndicator size="large" color="#000000" />
      ) : (
        <View
          style={[
            productsStyles.productItemcontainer,
            { backgroundColor: theme == "dark" ? "#212121" : "white" },
          ]}
        >
          <View>
            <View style={styles.header}>
              <Text
                style={[
                  globalStyles.titleStyle,
                  { color: theme == "dark" ? "white" : "#212121" },
                ]}
              >
                Products by {item}{" "}
              </Text>
            </View>

            <FlatList
              contentContainerStyle={[
                productsStyles.listProductsContainer,
                { backgroundColor: theme == "dark" ? "#212121" : "#white" },
              ]}
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

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
