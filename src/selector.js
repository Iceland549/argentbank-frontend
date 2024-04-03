import { createSelector } from '@reduxjs/toolkit';

export const selectUser = createSelector(
  state => state.user,
  user => {
    console.log("User state:", user);
    return {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      isAuthenticated: user.isAuthenticated,
      token: user.token,
    };
  }
);
  
