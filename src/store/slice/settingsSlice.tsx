import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "app",
  initialState: {
    route: [] as string[],
  },
  reducers: {
    pushRoute(state, action) {
      state.route.push(action.payload);
    },
    goBackRoute(state) {
      const lastRoute = state.route[state.route.length - 1];
      state.route = state.route.filter(
        (page) => page.toLowerCase() != lastRoute.toLowerCase()
      );
    },
  },
});

export const { pushRoute, goBackRoute } = settingsSlice.actions;
