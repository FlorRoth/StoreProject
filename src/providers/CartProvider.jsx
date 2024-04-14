import { useEffect, useReducer, useState,  } from "react";
import { types } from "../types/types";
import { axiosApi } from "../config/AxiosApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartReducer } from "../reducers/CartReducer";
import { CartContext } from "../contexts/CartContext";


const initialValues = {
  cartItems: [],
  total: 0,
  isLoading: false,
}

export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(CartReducer, initialValues);

  useEffect(() => {
    loadCartItem();
  }, []);

  useEffect(() => {
    const total = calculateTotal(state.cartItems);
    dispatch({
      type: types.cart.updateTotal,
      payload: {total}
    });
    AsyncStorage.setItem("CartItems", JSON.stringify(state.cartItems));
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
          const updatedCartItems = cartItems.filter((cartItem) => cartItem.item.id !== productId);
          dispatch({
            type: types.cart.removeFromCart,
            payload: {
               cartItems: updatedCartItems,
               isLoading: false
            } 
          });
    }
  };

  const getQuantity = (itemId) => {
    const cartItems = state.cartItems  ? [...state.cartItems] : [];
    const cartItem = cartItems.find(cartItem => cartItem.item.id === itemId);
    return cartItem ? cartItem.quantity : 1;
  };


  const clearCart = () => {
    dispatch({
      type: types.cart.updateCartItems,
      payload: {
         cartItems: [],
         isLoading: false
      } 
    });
  }


  const loadCartItem = async () => {
    try {
      const items = await AsyncStorage.getItem("CartItems");
      if (items !== null) {
        dispatch({
          type: types.cart.updateCartItems,
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
        removeFromCart,
        getQuantity,
        clearCart
      }}>
    {children}
    </CartContext.Provider>
  )
}