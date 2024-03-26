import { createSlice, nanoid } from "@reduxjs/toolkit";
import { api } from "../services/api";
import Cookies from "js-cookie";

const user = {
  id: nanoid(),
  avatar: "/assets/user.png",
};

type tempo = {
  email: string;
  id: string;
  phone: string;
  isVendorBusinessInfoComplete: boolean;
  token: string;
};

type user = {
  email: string;
  id: string;
  phone: string;
  isVendorBusinessInfoComplete: boolean;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    user: user as null | typeof user,
    token: Cookies.get("token") || "",
    loading: true,
    nav: false,
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
    setNav(state, action) {
      state.nav = action.payload;
    },
  },
});

export const { loginUser, logout, setNav } = authSlice.actions;
