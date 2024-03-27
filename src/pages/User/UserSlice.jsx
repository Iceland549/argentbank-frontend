import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const updateUserLoginStatus = (isLogged) => (dispatch) => {
  dispatch(setUserLoginStatus(isLogged));
};

export const loginUserSuccess = createAction('user/loginUserSuccess')

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  isLogged: false,
  name: "Guest",
};

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

      thunkAPI.dispatch(loginUserSuccess(data.user));
      thunkAPI.dispatch(setUserLoginStatus(true));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const logoutUser = () => (dispatch) => {
  dispatch(clearUser());
  dispatch(setUserLoginStatus(false));
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
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
    setUserLoginStatus(state, action) {
      state.isLogged = action.payload;
    },
    [loginUserSuccess.type]: (state, action) => {
      state.user = action.payload;
    },
    updateUserName(state, action) {
      state.user.name = action.payload;
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
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
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

export const { setUser, clearUser, setUserLoginStatus, updateUserName } = userSlice.actions;

export default userSlice.reducer;
