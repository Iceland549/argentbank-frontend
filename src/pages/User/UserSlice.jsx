import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const updateUserLoginStatus = (isLogged) => (dispatch) => {
  dispatch(setUserLoginStatus(isLogged));
};

export const loginUserSuccess = createAction('user/loginUserSuccess', (token) => ({
  payload: { token },
}));

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (loginData, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      console.log('Token in server response:', data.token);
      console.log('Server response:', data);
      if (data.token) {
        console.log('Token received from server:', data.token);
      } else {
        console.log('Token not found in server response:', data);
      }

      thunkAPI.dispatch(loginUserSuccess(data.token));
      thunkAPI.dispatch(setUserLoginStatus(true));

      localStorage.setItem('token', data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const logoutUser = () => (dispatch) => {
  dispatch(clearUser());
  dispatch(setUserLoginStatus(false));
  localStorage.removeItem('token');
};

export const signupUser = createAsyncThunk(
  'user/signupUser',
  async (signupData, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    isLoading: false,
    error: null,
    isLogged: false,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    isAuthenticated: false,
    token: localStorage.getItem('token') || '', 
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
    clearUser(state) {
      return {
        ...state,
        username: '',
        isLoading: false,
        error: null,
        isLogged: false,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        isAuthenticated: false,
        token: '',       };
    },
    setUserLoginStatus(state, action) {
      state.isAuthenticated = action.payload;
    },
    updateUserDetails(state, action) {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogged = true;
        state.token = action.payload.body.token;
        localStorage.setItem('token', action.payload.body.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isLogged = false;
        state.error = action.payload.error;
      })
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});

export const { setUsername, clearUser, setUserLoginStatus, updateUserDetails } = userSlice.actions;

export default userSlice.reducer;
