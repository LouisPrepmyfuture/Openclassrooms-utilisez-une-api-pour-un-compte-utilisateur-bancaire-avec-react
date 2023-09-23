import React from 'react';
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './redux-reducers/redux-auth'
import userReducer from './redux-reducers/redux-user'
import { Provider } from 'react-redux'
import App from './app';
import "./assets/main.css"

const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode >
		<Provider store={store} >
			<App />
		</Provider>
	</React.StrictMode>
);