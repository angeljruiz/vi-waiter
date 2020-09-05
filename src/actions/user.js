
// define types

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_LOGINMODAL = 'UPDATE_LOGINMODAL'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SIGNUP = 'SIGNUP'
export const APP_LOGOUT = 'APP_LOGOUT'

// actions

export const updateEmail = email => {
	return {
		type: UPDATE_EMAIL,
		payload: email
	}
}

export const updatePassword = password => {
	return {
		type: UPDATE_PASSWORD,
		payload: password
	}
}

export const updateUser = user => {
	return {
		type: UPDATE_USER,
		payload: user
	}
}

export const updateLoginModal = value => {
	return {
		type: UPDATE_LOGINMODAL,
		payload: value
	}
}

export const login = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await Firebase.auth().signInWithEmailAndPassword(email, password)

			getUser(response.user.uid)
		} catch (e) {
			alert(e)
		}
	}
}


export const getUser = uid => {
	return async (dispatch, getState) => {
		try {
			const user = await db
				.collection('users')
				.doc(uid)
				.get()

			dispatch({ type: LOGIN, payload: user.data() })
		} catch (e) {
			alert(e)
		}
	}
}

export const signup = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
			if (response.user.uid) {
				const user = {
					uid: response.user.uid,
					email: email
				}

				db.collection('users')
					.doc(response.user.uid)
					.set(user)

				dispatch({ type: SIGNUP, payload: user })
			}
		} catch (e) {
			alert(e)
		}
	}
}

export const logout = () => {
	return async (dispatch, getState) => {
		try {
			const response = await Firebase.auth().signOut()

			dispatch({type: LOGOUT})
			dispatch({type: APP_LOGOUT})
		} catch (e) {
			alert(e)
		}
	}
}


export const signInGoogle = () => {
	console.log("in signInGoole")
	console.log(provider)
	console.log(Firebase.auth)
	return async (dispatch, getState) => {
	try {
	  console.log(provider)
	  const result = await Firebase.auth().signInWithRedirect(provider);
	  var token = result.credential.accessToken;
	  // token can be used to access Google API
	  var userInfo = result.user;
	  console.log(userInfo);
	  dispatch({type: LOGIN, payload: userInfo });
	} catch (error) {
		console.log("Error: Gogole")
		alert(error.message)
	  }
	}
  }

  export const signUpGoogle = () => {
	return async (dispatch, getState) => {
	try {
	  const result = await signInWithGoogle();
	  var token = result.credential.accessToken;
	  // token can be used to access Google API
	  var userInfo = result.user;
	  console.log(userInfo);
	  dispatch({type: SIGNUP, payload: userInfo });
	} catch (error) {
		alert(error.message)
	  }
	}
  }



