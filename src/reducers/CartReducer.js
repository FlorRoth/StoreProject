import { types } from "../types/types";


export const CartReducer = (state={}, action) => {

    switch (action.type) {
        case  types.cart.addToCart:
            return {
                ...state,
                cartItems: action.payload.cartItems,
                isLoading: action.payload.isLoading
            }
        case  types.cart.removeFromCart:
            return {
                ...state,
                cartItems: action.payload.cartItems,
                isLoading: action.payload.isLoading
            } 
        case  types.cart.updateCartItems:
            return {
                ...state,
                cartItems: action.payload.cartItems,
                isLoading: action.payload.isLoading
         } 
        case  types.cart.updateTotal:
            return {
                ...state,
                total: action.payload.total,
            }
        default:
            return state;
    }
}