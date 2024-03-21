import { types } from "../types/types";


export const ProductReducer = (state={}, action) => {

    switch (action.type) {
        case  types.product.getProducts:
            return {
                ...state,
                products: action.payload.products,
                isLoading: action.payload.isLoading
            }

        case  types.favorite.toggleFavorite:
            return {
                ...state,
                favorites: action.payload.favorites,
            }
            case  types.categorie.getCategories:
                return {
                    ...state,
                    categories: action.payload.categories,
                    isLoading: action.payload.isLoading,

                }

        default:
            return state;
    }
}