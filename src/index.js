import React from 'react';
import ReactDOM from 'react-dom/client'
import Home from './pages/home';
import Login from './pages/login';
import Error from './pages/error';
import Profil from './pages/profil';
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './redux-reducers/redux-user'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import { Provider } from 'react-redux'

import "./assets/main.css"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <Error />
	},
	{
		path: "/profil",
		element: <Profil />,
		errorElement: <Error />
	}
])

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode >
		<Provider store={store} >
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);