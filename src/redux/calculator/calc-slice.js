import { createSlice } from '@reduxjs/toolkit';
import calcOperations from './calc-operations';

const initialState = {
  data: null,
  /* user: { name: null, email: null, id: null }, */
  /* token: null, */
  /* isLoggedIn: false, */
  /*  isFetchingCurrentUser: false, */
  isReducerSpinner: false,
  /*  userData: {
    height: null,
    age: null,
    currentWeight: null,
    desiredWeight: null,
    bloodType: null,
    calories: null,
  }, */
};

const calcSlice = createSlice({
  name: 'calc',
  initialState,
  extraReducers: {
    [calcOperations.fetchCalculatorUser.pending](state) {
      state.isReducerSpinner = true;
    },
    [calcOperations.fetchCalculatorUser.fulfilled](state, action) {
      state.data = action.payload;
      state.isReducerSpinner = false;
    },
    [calcOperations.fetchCalculatorUser.rejected](state) {
      state.isReducerSpinner = false;
    },
    /* [authOperations.logIn.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.id = action.payload.id;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.userData = action.payload.userData;
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
    }, */
  },
});

export default calcSlice.reducer;
