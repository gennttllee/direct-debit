import { createSlice } from "@reduxjs/toolkit";
import React from "react";

type payload = {
  payload: {
    variant: "warning" | "custom" | "dialog";
    warning?: {
      title: string;
      content: string;
      cancel: () => void;
      proceed: (
        loading: boolean,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
      ) => void;
    };
    dialog?: {
      title: string;
      content: string;
      cancel: () => void;
      proceed: (
        loading: boolean,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
      ) => void;
    };
    custom?: {
      name: string;
      proceed: (
        loading: boolean,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>,
        data: any
      ) => void;
    };
  };
};

type warning = {
  title: string;
  content: string;
  cancel: () => void;
  proceed: (
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
};

type dialog = {
  title: string;
  content: string;
  cancel: () => void;
  proceed: (
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
};

type custom = {
  name: string;
  proceed: (
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    data: any
  ) => void;
}[];

export const modalSlice = createSlice({
  name: "app",
  initialState: {
    warning: {} as warning,
    dialog: {} as dialog,
    custom: [] as custom,
    routes: [] as string[],
    singleRoute: "",
  },
  reducers: {
    openModal(state, action: payload) {
      switch (action.payload.variant) {
        case "warning":
          if (action.payload.warning) {
            state.warning = action.payload.warning;
          }
          break;
        case "dialog":
          if (action.payload.dialog) {
            state.dialog = action.payload.dialog;
          }
          break;
        case "custom":
          if (action.payload.custom) {
            const old = state.custom.find(
              (cus) =>
                cus?.name?.toLowerCase() ==
                action.payload.custom?.name.toLowerCase()
            );
            if (old) {
              return;
            }
            state.custom.push(action.payload.custom);
            state.routes.push(action.payload.custom.name);
            state.singleRoute = action.payload.custom.name;
          }
          break;
        default:
          break;
      }
    },
    goBack(state) {
      state.custom = state.custom.filter(
        (cus) => cus.name !== state.singleRoute
      );
      state.routes = state.routes.filter((filt) => filt !== state.singleRoute);
      state.singleRoute = state.routes[state.routes.length - 1];
    },
    closeModal(state) {
      state.warning = {} as warning;
      state.dialog = {} as dialog;
      state.custom = [] as custom;
      state.routes = [] as string[];
      state.singleRoute = "";
    },
  },
});

export const { openModal, closeModal, goBack } = modalSlice.actions;
