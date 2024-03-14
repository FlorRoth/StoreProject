import { useReducer } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductReducer } from "../reducers/ProductReducer";
import { types } from "../types/types";
import { axiosApi } from "../config/AxiosApi";

const initialValues = {
  products: [],
  isLoading: true,
}

export const ProductProvider = ({ children }) => {

  const [state, dispatch] = useReducer(ProductReducer, initialValues);
  
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




  return (

    <ProductContext.Provider value={{
        state,
        getProducts
      }}>
    {children}
    </ProductContext.Provider>
  )
}