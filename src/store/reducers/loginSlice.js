import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "Login",
  initialState: {
    isLoggedIn: false,
    userId: undefined,
    name: undefined,
    email: undefined,
    userRole: undefined,
    lastLoggedIn: undefined,
      accessToken: undefined
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.userRole = action.payload.userRole;
      state.lastLoggedIn = action.payload.lastLoggedIn;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.userId = undefined;
      state.name = undefined;
      state.email = undefined;
      state.userRole = undefined;
      state.accessToken = undefined
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
