import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import { authSlice } from "./slice/authSlice";
import { appSlice } from "./slice/appSlice";
import { alertSlice } from "./slice/alertSlice";
import { modalSlice } from "./slice/modalSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice.reducer,
    app: appSlice.reducer,
    alert: alertSlice.reducer,
    modal: modalSlice.reducer,
  },
  middleware: [api.middleware, thunk],
});

export const actions = {
  auth: authSlice.actions,
  app: appSlice.actions,
  alert: alertSlice.actions,
  modal: modalSlice.actions,
};
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
