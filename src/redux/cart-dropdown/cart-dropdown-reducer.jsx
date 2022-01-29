import { cartActionTypes } from "./cart-dropdown.types"
import { addItemsToCart, decrementQuantity, removeItemFromCart } from "./cart.utilz"

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
}

export const cartDropDownReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			}
		case cartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemsToCart(state.cartItems, action.payload)
			}
		case cartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			}

		case cartActionTypes.DECRESE_QUANTITY: 
			return {
				...state,
				cartItems: decrementQuantity(state.cartItems, action.payload)
			}
		default:
			return state
	}
}