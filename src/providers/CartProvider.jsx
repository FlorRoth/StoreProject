import { useEffect, useReducer, useState,  } from "react";
import { types } from "../types/types";
import { axiosApi } from "../config/AxiosApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartReducer } from "../reducers/CartReducer";
import { CartContext } from "../contexts/CartContext";


const initialValues = {
  cartItems: [],
  total: 0,
  isLoading: true,
}

export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(CartReducer, initialValues);

  useEffect(() => {
    loadCartItem();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("CartItems", JSON.stringify(state.cartItems));
    const total = calculateTotal(state.cartItems);
    dispatch({
      type: types.cart.updateTotal,
      payload: {total}
    });
  }, [state.cartItems]);


  const addToCart = (product, quantity) => {
      const cartItems = state.cartItems  ? [...state.cartItems] : [];
      const existingItemIndex = cartItems.findIndex(cartItem => cartItem.item.id === product.id);

      if (existingItemIndex !== -1) {
          cartItems[existingItemIndex] = {
              item: product,
              quantity: quantity
          };
      }
      else {
        cartItems.push({item: product, quantity: quantity})
      }
    
     dispatch({
        type: types.cart.addToCart,
         payload: {
            cartItems: cartItems,
            isLoading: false
         } 
    });
  };

  const removeFromCart = (productId) => {
    const cartItems = state.cartItems  ? [...state.cartItems] : [];
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.item.id === productId);
    if (existingItemIndex !== -1) {
          const updateCartItems = cartItems.filter((cartItem) => cartItem.item.id !== productId);
          dispatch({
            type: types.cart.removeFromCart,
            payload: {
               cartItems: updateCartItems,
               isLoading: false
            } 
       });
    }
  };


  const loadCartItem = async () => {
    try {
      const items = await AsyncStorage.getItem("CartItems");
      if (items !== null) {
        dispatch({
          type: types.cart.addToCart,
          payload: {
             cartItems: JSON.parse(items),
             isLoading: false
          } 
        });
      }
    } catch (error) {
      console.error("Error loading items from AsyncStorage:", error);
    }
  };

  const calculateTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.item.price * item.quantity; 
    });
    return total;
  };

  return (

    <CartContext.Provider value={{
        state,
        addToCart,
        loadCartItem,
        removeFromCart
      }}>
    {children}
    </CartContext.Provider>
  )
}