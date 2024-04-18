import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

      if (data.status==200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue({ error: data.message });
      }

    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

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
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue({ error: data.message });
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const getUser = createAsyncThunk(
  'user/getUser',
  async (signupData, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization : 'Bearer '+ localStorage.getItem('token') 
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

export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async (profileData, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify(profileData),
      });
      const data = await response.json();
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue({ error: data.message });
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
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

    clearUser(state) {
      return {
        ...state,
        userName: '',
        isLoading: false,
        error: null,
        isLogged: false,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        isAuthenticated: false,
        token: '',
      };
    },

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
        state.token = null;
      })
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userName = action.payload.userName;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userName = action.payload.userName;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userName = action.payload.body.userName;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
    },
});

export const { clearUser } = userSlice.actions;

export default userSlice.reducer;
