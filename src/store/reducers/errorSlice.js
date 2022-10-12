import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "Error",
  initialState: {
    shouldShow: false,
    message: undefined,
    type: undefined,
  },
  reducers: {
    showAlert: (state, action) => {
      state.message = action.payload.message;
      state.shouldShow = true;
      state.type = action.payload.type;
    },
  },
});

export const { showAlert } = errorSlice.actions;
export default errorSlice.reducer;
