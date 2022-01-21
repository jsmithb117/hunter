import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../features/board/boardSlice';
import formReducer from '../features/form/formSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    board: boardReducer,
    form: formReducer,
    user: userReducer,
  },
});
