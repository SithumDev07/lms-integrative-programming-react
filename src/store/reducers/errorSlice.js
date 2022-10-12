import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "Error",
  initialState: {
    shouldShow: false,
    message: undefined,
    type: undefined,
    autoClose: undefined,
  },
  reducers: {
    showAlert: (state, action) => {
      state.message = action.payload.message;
      state.shouldShow = true;
      state.type = action.payload.type;
      state.autoClose = action.payload.autoClose;
    },
  },
});

export const { showAlert } = errorSlice.actions;
export default errorSlice.reducer;
