import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginSlice";
import errorReducer from "./reducers/errorSlice";

const rootReducer = combineReducers({
  login: loginReducer,
  error: errorReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
