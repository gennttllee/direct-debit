import { createSlice } from "@reduxjs/toolkit";
import { businessHistory } from "../../data";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    nav: false,
    business: {} as (typeof businessHistory)[0],
  },
  reducers: {
    setNav(state, action) {
      state.nav = action.payload;
    },
    getBusiness(state, action: { payload: (typeof businessHistory)[0] }) {
      state.business = action.payload;
    },
  },
});

export const { setNav, getBusiness } = appSlice.actions;
