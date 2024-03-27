import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./pages/User/UserSlice"; 
import thunk from 'redux-thunk';

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
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export default store;
