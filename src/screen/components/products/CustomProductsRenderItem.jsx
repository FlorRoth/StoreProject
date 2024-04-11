import { Text, View, TouchableOpacity, Image } from "react-native";
import { productsStyles } from "../../../styles/productsStyles";
import { useNavigation } from "@react-navigation/native";

export const RenderProductsItem = ({ item, state, toggleFavorite }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={productsStyles.cardProduct}
      onPress={() => navigation.navigate("ProductItem", { item: item })}
    >
      <View style={productsStyles.cardProductHeader}>
        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
          <Image
            style={{ height: 30, width: 30 }}
            source={
              state.favorites.includes(item.id)
                ? require("../../../../assets/favorite-black.png")
                : require("../../../../assets/favorite.png")
            }
          />
        </TouchableOpacity>
      </View>
      <Image style={productsStyles.productImage} source={{ uri: item.image }} />
      <View style={productsStyles.cardProductFooter}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text numberOfLines={2} style={productsStyles.titleProduct}>
            {item.title}
          </Text>
          <Text numberOfLines={3} style={productsStyles.descriptionProduct}>
            {item.description}
          </Text>
          <Text style={productsStyles.priceProduct}>
            $ {item.price.toFixed(2)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
