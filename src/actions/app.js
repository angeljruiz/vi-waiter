// define types

export const UPDATE_MENU = 'UPDATE_MENU'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const UPDATE_CART = 'UPDATE_CART'
export const UPDATE_PRICE = 'UPDATE_PRICE'
export const ADDTO_CART = 'ADDTO_CART'


// actions

export const updateMenu = menu => {
	return {
		type: UPDATE_MENU,
		payload: menu
	}
}

export const updateItem = item => {
	return {
		type: UPDATE_ITEM,
		payload: item
	}
}

export const updateCart = cart => {
	return {
		type: UPDATE_CART,
		payload: cart
	}
}

export const updatePrice = price => {
	return {
		type: UPDATE_PRICE,
		payload: price
	}
}

export const addToCart = item => {
	return {
		type: ADDTO_CART,
		payload: item
	}
}
