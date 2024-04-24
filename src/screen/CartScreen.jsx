import { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { cartStyles } from "../styles/cartStyles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { CartContext } from "../contexts/CartContext";
import Spinner from "./components/ui/Spinner";
import RenderCartItem from "./components/renders/RenderCartItem";
import { globalStyles } from "../styles/globalStyles";
import { CustomButton } from "./components/ui/CustomButton";

import { FormContext } from "../contexts/FormContext";
export default function Cart() {
  const navigation = useNavigation();
  const { state: stateCart } = useContext(CartContext);
  const { theme } = useContext(FormContext);

  return (
    <View style={{ flex: 1 }}>
      {stateCart.isLoading ? (
        <Spinner />
      ) : stateCart.cartItems.length > 0 ? (
        <View
          style={[
            globalStyles.container,
            { backgroundColor: theme == "dark" ? "#212121" : "#fff" },
          ]}
        >
          <ScrollView>
            <View>
              <Text
                style={[
                  globalStyles.titleStyle,
                  {
                    marginTop: 10,
                    color: theme == "dark" ? "white" : "#606060",
                  },
                ]}
              >
                Cart
              </Text>
              {stateCart.cartItems.map((cart) =>
                RenderCartItem({
                  item: cart.item,
                  key: cart.item.id,
                  quantity: cart.quantity,
                })
              )}
            </View>
          </ScrollView>

          <View style={[cartStyles.containerTotal, { marginTop: 10 }]}>
            <Text
              style={[
                cartStyles.textTotal,
                { color: theme == "dark" ? "white" : "#606060" },
              ]}
            >
              Total ({stateCart.cartItems.length}{" "}
              {stateCart.cartItems.length > 1 ? "items" : "item"}) :
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: theme == "dark" ? "white" : "#606060",
              }}
            >
              ${stateCart.total.toFixed(2)}
            </Text>
          </View>

          <View style={cartStyles.addToCartContainer}>
            <CustomButton
              ButtonPress={() => navigation.navigate("Payment")}
              btnText={"Buy"}
              bckColor={"#000000"}
              colorT={"#FFFFFF"}
              borderC={"white"}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme == "dark" ? "#212121" : null,
          }}
        >
          <Image
            style={{
              height: 200,
              width: "100%",
              tintColor: theme == "dark" ? "white" : null,
              backgroundColor: theme == "dark" ? "#212121" : null,
            }}
            source={require("../../assets/empty-cart.png")}
          />
        </View>
      )}
    </View>
  );
}
