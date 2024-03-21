import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../pages/user/userSlice"; 

const initialState = {
  user: {
    isAuthenticated: false, 
  },
};

const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer, 
  }),
  preloadedState: initialState,
});

export default store;
