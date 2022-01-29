export const addItemsToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems
		.find( cartItem => cartItem.id === cartItemToAdd.id);
	
		if(existingCartItem){
			return cartItems
				.map(cartItem => cartItem.id === cartItemToAdd.id 
					? {...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem
					)
		}

		return [ ...cartItems, { ...cartItemToAdd, quantity: 1} ]
}

export const removeItemFromCart = (cartItems, cartToRemove) => {
	return cartItems.filter(item => item.id !== cartToRemove.id)
} 

export const decrementQuantity = (cartItems, cartToDecrement) => {
	const existingCartItem = cartItems
		.find( cartItem => cartItem.id === cartToDecrement.id);

	if(existingCartItem.quantity === 1) return cartItems.filter(item => item.id !== cartToDecrement.id)

	return cartItems.map(item => 
		item.id === cartToDecrement.id ? {...item, quantity: item.quantity - 1} : item)
}