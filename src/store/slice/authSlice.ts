import { createSlice, nanoid } from "@reduxjs/toolkit";
import { api } from "../services/api";
import Cookies from "js-cookie";
import { token } from "../../data";

const user = {
  id: nanoid(),
  avatar: "/assets/user.png",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    user: user as null | typeof user,
    token: Cookies.get("token") || token,
  },
  reducers: {
    loginUser(state, action) {
      state.token = action.payload;
      Cookies.set("token", JSON.stringify(action.payload));
    },
    logout(state) {
      api.util.resetApiState();
      state.authenticated = false;
      state.user = null;
      state.token = "";
      sessionStorage.clear();
      Cookies.remove("token");
    },
  },
});

export const { loginUser, logout } = authSlice.actions;
