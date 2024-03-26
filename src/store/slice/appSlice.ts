import { createSlice, current } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    skip: false,
    nav: false,
    withdraw: {
      amount: 0,
      bank: { bankName: "", accountNumber: 0, accountName: "" },
    },
  },
  reducers: {
    setNav(state, action) {
      state.nav = action.payload;
    },
    getWithdrawal(state, action) {
      switch (action.payload.type) {
        case "amount":
          state.withdraw.amount = action.payload.payload;
          break;
        case "bank":
          state.withdraw.bank = action.payload.payload;
          break;
        default:
          break;
      }
    },
  },
});

export const { setNav, getWithdrawal } = appSlice.actions;
