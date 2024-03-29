import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./pages/User/UserSlice"; 

const initialState = {
  user: {
    isAuthenticated: false, 
    username: '',
  },
};

const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer, 
  }),
  preloadedState: initialState,
});

export default store;
