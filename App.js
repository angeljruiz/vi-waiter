import React, {useState} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import BottomNavigator from './src/navigation/BottomNavigator';
import reducer from './src/reducers';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";


const theme = {
  Button: {
    // titleStyle: {
    //   fontSize: 28,
    //   color: "black",
    // },
  },
};



(async () => {
  let token = await AsyncStorage.getItem("token");
  if (token) {
    axios.defaults.withCredentials = true;
    axios.defaults.credentials = "include";
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
})();

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export default function App() {
  return (
    <React.Fragment>
			<IconRegistry icons={[EvaIconsPack]}/>
			<ApplicationProvider {...eva} theme={eva.light}>
				<Provider store={store}>
					<BottomNavigator />
				</Provider>
			</ApplicationProvider>
    </React.Fragment>
  );
}
