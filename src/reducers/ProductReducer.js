import { types } from "../types/types";


export const ProductReducer = (state={}, action) => {

    switch (action.type) {
        case  types.product.getProducts:
            return {
                ...state,
                products: action.payload.products,
                isLoading: action.payload.isLoading
            }

        case  types.product.toggleFavorite:
            return {
                ...state,
                favorites: action.payload.favorites,
            }

        default:
            return state;
    }
}