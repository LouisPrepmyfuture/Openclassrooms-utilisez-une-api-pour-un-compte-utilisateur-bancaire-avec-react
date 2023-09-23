import React from "react"
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';


const initialState = {
  profil: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    pending: (state) => {
			state.loading = true;
      state.error = null;
    },
    fulfilled: (state, action) => {
			state.loading = false
			state.message = action.payload.body.message
			state.error = action.payload;
			state.error = null;
			// donnés de l'utilisateur
			state.profil = action.payload.body
    },
    rejected: (state, action) => {
			state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
    updated: (state, action) => {
			state.loading = false
			state.message = action.payload.body.message
			state.error = action.payload;
			state.error = null;
			// donnés de l'utilisateur
			state.profil = action.payload.body
    },
  },
});

export const { pending, fulfilled, rejected, updated } = userSlice.actions;

export const getUser = (credentials) => async (dispatch) => {
  try {
    dispatch(pending());

    const url = 'http://localhost:3001/api/v1/user/profile'; 
		
    const response = await fetch(url, {
			method: 'POST',
      headers: {
				'accept': 'application/json',
        'Authorization': `Bearer ${credentials.token}`,
      },
    });
		
    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();

    dispatch(fulfilled(data));
  } catch (error) {
    dispatch(rejected(error.message));
  }
};


export const updateUser = (credentials) => async (dispatch) => {
	console.log(credentials);
  try {
    dispatch(pending());

    const url = 'http://localhost:3001/api/v1/user/profile'; 
		const options = {
					method: 'PUT',
					headers: {"Content-Type" : 'application/json',
					"Authorization" : `Bearer ${credentials.token}`},
					body: JSON.stringify({
					firstName: credentials.firstName, 
					lastName: credentials.lastName
		 })
		}
    const response = await fetch(url, options);
		
    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    dispatch(fulfilled(data));
  } catch (error) {
    dispatch(rejected(error.message));
  }
};


export default userSlice.reducer;