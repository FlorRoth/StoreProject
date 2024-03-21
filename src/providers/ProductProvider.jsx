import { useEffect, useReducer } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductReducer } from "../reducers/ProductReducer";
import { types } from "../types/types";
import { axiosApi } from "../config/AxiosApi";
import AsyncStorage from "@react-native-async-storage/async-storage";


const initialValues = {
  products: [],
  favorites: [],
  categories:[],
  isLoading: true,
}

export const ProductProvider = ({ children }) => {

  const [state, dispatch] = useReducer(ProductReducer, initialValues);

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);


  const getProducts = async () => {
   
    try {
        
      const {data} = await axiosApi.get('/products')
      
      dispatch({
        type: types.product.getProducts,
        payload: {
           products: data,
           isLoading: false,
        }
      })

    } catch (error) {
      dispatch({
        type: types.product.getProducts,
        payload: {
           products: [],
           isLoading: false,
        }
      })
    }
  }
  const getCategories = async () => {
   
    try {
      const {data} = await axiosApi.get('/products/categories')
      dispatch({
        type: types.categorie.getCategories,
        payload: {
          categories:data,
          isLoading:false,
        }
      })
    } catch (error) {
      dispatch({
        type: types.categorie.getCategories,
        payload: {
          categories: [],
           isLoading: false,
        }
      })
    }
  }


  const toggleFavorite = (productId) => {
      const favorites = state.favorites ? [...state.favorites] : [];
      const isFavorite = favorites.includes(productId);

      
      if (isFavorite) {
        const index = favorites.indexOf(productId);
        favorites.splice(index, 1);
      } else {
        favorites.push(productId);
      }

      dispatch({
        type: types.product.toggleFavorite,
        payload: {favorites},
      });
  };

  const loadFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      if (favorites !== null) {
        dispatch({
          type: types.product.setFavorites,
          payload: { favorites: JSON.parse(favorites) },
        });
      }
    } catch (error) {
      console.error("Error loading favorites from AsyncStorage:", error);
    }
  };


  return (

    <ProductContext.Provider value={{
        state,
        getProducts,
        getCategories,
        toggleFavorite,
      }}>
    {children}
    </ProductContext.Provider>
  )
}