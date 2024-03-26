import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "..";
import { baseUrl } from "../../baseUrl";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["product", "vendor"],
  endpoints: (build) => ({
    login: build.mutation({
      query: (args) => ({
        url: "auth/vendors/login",
        method: "POST",
        body: args,
      }),
    }),
    signUp: build.mutation({
      query: (args) => ({
        url: "vendors",
        method: "POST",
        body: args,
      }),
    }),
    verifyEmail: build.mutation({
      query: (args) => ({
        url: "vendors/verify/email/",
        method: "POST",
        body: args,
      }),
    }),
    updatePassword: build.mutation({
      query: ({ email, otp, password }) => ({
        url: `vendors/reset/password/email/${email}`,
        method: "PATCH",
        body: { otp, password },
      }),
    }),
  }),
});

export const {} = api;
