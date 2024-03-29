import { createSelector } from '@reduxjs/toolkit';

export const selectUser = createSelector(
  state => state.user,
  user => user.username
);

