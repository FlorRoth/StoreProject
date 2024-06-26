import { useContext } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { CartContext } from "../../../contexts/CartContext";
import { cartStyles } from "../../../styles/cartStyles";

import { FormContext } from "../../../contexts/FormContext";

export default function ({ item, key, quantity }) {
  const { addToCart, removeFromCart, getQuantity } = useContext(CartContext);
  const { theme } = useContext(FormContext);

  const decreaseQuantity = () => {
    const currentQty = getQuantity(item.id);
    if (currentQty > 1) {
      addToCart(item, -1);
    }
  };

  const increaseQuantity = () => {
    const currentQty = getQuantity(item.id);
    addToCart(item, 1);
  };

  return (
    <View
      key={key}
      style={[
        cartStyles.cardProduct,
        { backgroundColor: theme == "dark" ? "#212121" : "white" },
      ]}
    >
      <View style={cartStyles.cardProductHeader}>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
          <Image
            style={{ height: 24, width: 24 }}
            source={require("../../../../assets/tash.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={{}}>
        <Image style={cartStyles.productImage} source={{ uri: item.image }} />
        <View style={[cartStyles.quantityContainer, cartStyles.shadow, {}]}>
          <TouchableOpacity onPress={decreaseQuantity}>
            <Text style={{ fontSize: 24 }}>-</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>{getQuantity(item.id)}</Text>
          <TouchableOpacity onPress={increaseQuantity}>
            <Text style={{ fontSize: 24 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={cartStyles.cardProductFooter}>
        <View style={{ flex: 2 }}>
          <Text
            style={[
              cartStyles.titleProduct,
              { color: theme == "dark" ? "white" : "#606060" },
            ]}
          >
            {item.title}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              cartStyles.priceProduct,
              { color: theme == "dark" ? "white" : "#606060" },
            ]}
          >
            $ {item.price.toFixed(2)}
          </Text>
        </View>
      </View>
      <Text numberOfLines={0} style={cartStyles.descriptionProduct}>
        {item.category}
      </Text>
    </View>
  );
}
