import { combineReducers } from 'redux'
import { LOGIN, LOGOUT, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_LOGINMODAL, UPDATE_USER, APP_LOGOUT } from '../actions/user';

const userReducer = (state = {}, action) => {
	console.log(action.type);
	console.log(action.payload)
	switch (action.type) {
		case LOGIN:
			return action.payload;
		case LOGOUT:
			return {}
		case SIGNUP:
			return action.payload;
		case UPDATE_EMAIL:
			return { ...state,  email: action.payload }
		case UPDATE_PASSWORD:
			return { ...state,  password: action.payload }
		case UPDATE_USER:
			return { ...state,  ...action.payload }
		default:
			return state
	}
}

const appReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_LOGINMODAL:
			return {...state, loginModal:action.payload};
		case APP_LOGOUT:
			return {};
		default:
			return state
	}
}

const rootReducer = combineReducers({
	user:userReducer, 
	app:appReducer,
})

export default rootReducer
