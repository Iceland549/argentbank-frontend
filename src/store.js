import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./pages/User/UserSlice"; 

const initialState = {
  user: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    userName: '',
    isAuthenticated: false,
    token: '', 
  },
};

const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer, 
  }),
  preloadedState: initialState,
});

export default store;
