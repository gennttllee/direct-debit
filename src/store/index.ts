import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import { authSlice } from "./slice/authSlice";
import { appSlice } from "./slice/appSlice";
import { settingsSlice } from "./slice/settingsSlice";
import { alertSlice } from "./slice/alertSlice";
import { modalSlice } from "./slice/modalSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice.reducer,
    app: appSlice.reducer,
    settings: settingsSlice.reducer,
    alert: alertSlice.reducer,
    modal: modalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export const actions = {
  auth: authSlice.actions,
  app: appSlice.actions,
  settings: settingsSlice.actions,
  alert: alertSlice.actions,
  modal: modalSlice.actions,
};
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
