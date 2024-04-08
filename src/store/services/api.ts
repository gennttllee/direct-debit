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
  tagTypes: ["business"],
  endpoints: (build) => ({
    verifyEmail: build.mutation({
      query: (args) => ({
        url: "vendors/verify/email/",
        method: "POST",
        body: args,
      }),
    }),
    getBusinesses: build.query({
      query: (args) => ({
        url: "businesses",
      }),
      providesTags: ["business"],
    }),
  }),
});

export const { useGetBusinessesQuery } = api;
