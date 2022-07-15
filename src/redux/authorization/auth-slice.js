import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null, id: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isReducerSpinner: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.dataReg.user;
      state.token = action.payload.dataLog.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.id = action.payload.id;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.pending](state) {
      state.isReducerSpinner = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null, id: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isReducerSpinner = false;
    },
    [authOperations.logOut.rejected](state) {
      state.isReducerSpinner = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
