import { Text, View, TouchableOpacity, Image } from "react-native";
import { productsStyles } from "../../../styles/productsStyles";
import { useNavigation } from "@react-navigation/native";
import { FormContext } from "../../../contexts/FormContext";
import { useContext } from "react";
export const RenderProductsItem = ({ item, state, toggleFavorite }) => {
  const navigation = useNavigation();
  const { theme } = useContext(FormContext);
  return (
    <TouchableOpacity
      style={[
        productsStyles.cardProduct,
        { backgroundColor: theme == "dark" ? "#212121" : "white" },
      ]}
      onPress={() => navigation.navigate("ProductItem", { item: item })}
    >
      <View style={productsStyles.cardProductHeader}>
        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
          <Image
            style={{
              height: 30,
              width: 30,
              borderRadius: 20,
              borderColor: theme == "dark" ? "white" : "black",
              borderWidth: 1,
            }}
            source={
              state.favorites.includes(item.id)
                ? require("../../../../assets/favorite-black.png")
                : require("../../../../assets/favorite.png")
            }
          />
        </TouchableOpacity>
      </View>
      <Image
        style={[productsStyles.productImage, { backgroundColor: "white" }]}
        source={{ uri: item.image }}
      />
      <View style={productsStyles.cardProductFooter}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            numberOfLines={2}
            style={[
              productsStyles.titleProduct,
              { color: theme == "dark" ? "#f2f8ff" : "#000000" },
            ]}
          >
            {item.title}
          </Text>
          <Text numberOfLines={3} style={productsStyles.descriptionProduct}>
            {item.description}
          </Text>
          <Text
            style={[
              productsStyles.priceProduct,
              { color: theme == "dark" ? "#f2f8ff" : "#000000" },
            ]}
          >
            $ {item.price.toFixed(2)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
