import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://health-projectbackend.herokuapp.com/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const dataRegisration = await axios.post('auth/register', credentials);
      const { email, password } = credentials;
      const dataLogin = await axios.post('auth/login', { email, password });
      /* console.log(credentials);
      console.log(data); */
      console.log(dataRegisration);

      const data = {
        dataReg: dataRegisration.data,
        dataLog: dataLogin.data.data,
      };
      /* console.log(data); */
      token.set(data.dataLog.token);
      toast.success('You have successfully registered');

      return data;
    } catch (error) {
      if (error) {
        /* console.log(error, error.response); */
        if (error.response && error.response.status === 400) {
          toast.error('Not the correct password or email');
        }
        if (error.response && error.response.status === 409) {
          toast.error('User with this email already registered');
        }
      }
      return rejectWithValue(error);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('auth/login', credentials);
      /* console.log(data); */

      token.set(data.data.token);
      toast.success('You are logged in');
      return data.data; /////Приходить з бека data: {user: name:dsfdfd,email:fdfdfdf}
    } catch (error) {
      if (error) {
        toast.error('Not the correct email or password ');
      }
      return rejectWithValue(error);
    }
  },
);

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('auth/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('auth/user');
      return data;
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};

export default operations;
