import { cartActionTypes } from "./cart-dropdown.types";

export const toggleCartHidden = () => {
	return {
		type: cartActionTypes.TOGGLE_CART_HIDDEN,
	}
}

export const addItem = item => {
	return {
		type: cartActionTypes.ADD_ITEM,
		payload: item
	}
}

export const removeItem = item => {
	return {
		type: cartActionTypes.REMOVE_ITEM,
		payload: item
	}
}
export const decremQuantity = item => {
	return {
		type: cartActionTypes.DECRESE_QUANTITY,
		payload: item
	}
}