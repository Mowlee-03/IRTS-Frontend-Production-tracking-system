import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  message: '',
  variant: 'default',
  duration: 2000, // Default duration
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.variant = action.payload.variant || 'default';
      state.duration = action.payload.duration || 2000;
    },
    clearSnackbar: (state) => {
      state.open = false;
      state.message = '';
      state.variant = 'default';
      state.duration = 2000;
    },
  },
});

export const { showSnackbar, clearSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
