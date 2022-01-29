import { createSelector } from 'reselect';

// const selectCartItems = state => state.cartDropDown.cartItems;
const selectCart = state => state.cartDropDown

export const selectCartItems = createSelector(
	selectCart,
	(cart) => cart.cartItems
);
export const selectCarItemsCount = createSelector(
	selectCartItems,
	cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
)

export const selectCartHidden = createSelector(
	selectCart,
	(cart) => cart.hidden
)

export const selectCartTotal = createSelector(
	selectCartItems,
	cartItems => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
)