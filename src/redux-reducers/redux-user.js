import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.loading = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
	console.log(credentials)
  try {
    dispatch(loginStart());

    const url = 'http://localhost:3001/api/v1/user/login'; // URL de l'API de connexion

    const response = await fetch(url, {
      method: 'POST', // Utiliser la méthode POST
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials), // Envoyer les informations d'identification sous forme de JSON dans le corps de la requête
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};


export default authSlice.reducer;