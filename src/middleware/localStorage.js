// localStorageMiddleware.js

import { getUser } from '../slices/UserSlice';

const localStorageMiddleware = store => next => action => {
  // Interceptez l'action getUser
  if (action.type === 'user/getUser/fulfilled') {
    // Sauvegardez les informations de l'utilisateur dans localStorage
    localStorage.setItem('user', JSON.stringify(action.payload));
  }

  // Passez l'action au middleware suivant (ou au réducteur si c'est le dernier middleware)
  return next(action);
};

export default localStorageMiddleware;
