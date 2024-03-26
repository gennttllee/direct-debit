import { createSlice } from "@reduxjs/toolkit";

type payload = {
  payload: {
    variant: "success" | "error";
    message: string;
  };
};

export const alertSlice = createSlice({
  name: "app",
  initialState: {
    error: "",
    success: "",
  },
  reducers: {
    toast(state, action: payload) {
      const data = action.payload;
      switch (data.variant) {
        case "error":
          state.error = data.message;
          break;
        case "success":
          state.success = data.message;
          break;
        default:
          break;
      }
    },
    closeToast(state) {
      state.error = "";
      state.success = "";
    },
  },
});

export const { toast, closeToast } = alertSlice.actions;
