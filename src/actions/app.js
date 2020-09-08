// define types

export const UPDATE_MENU = 'UPDATE_MENU'


// actions

export const updateMenu = menu => {
	return {
		type: UPDATE_MENU,
		payload: menu
	}
}
