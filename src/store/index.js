import { createSlice, configureStore } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialAuthState = {
  isLoggedIn: false,
  username:''
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state,action) {
      var loginDetails = {
        username: action.payload,
        isLoggedIn: true
      }
      Cookies.set('information-hub-cookie', JSON.stringify(loginDetails), { expires: 2 });
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    logout(state) {
      Cookies.remove('information-hub-cookie');
      state.isLoggedIn = false;
      state.username = '';
    },
  },
});

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

export const authActions = authSlice.actions;

export default store;
