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
  tagTypes: ["business", "products"],
  endpoints: (build) => ({
    verifyEmail: build.mutation({
      query: (args) => ({
        url: "vendors/verify/email/",
        method: "POST",
        body: args,
      }),
    }),
    editBusiness: build.mutation({
      query: (args) => ({
        url: `businesses/${args.id}`,
        method: "PUT",
        body: args,
      }),
      invalidatesTags: ["business"],
    }),
    getBusinesses: build.query({
      query: (args) => ({
        url: "businesses",
      }),
      providesTags: ["business"],
    }),
    getClients: build.query({
      query: (args) => ({
        url: "clients/multi-filter",
        params: args,
      }),
      providesTags: ["products"],
    }),
    addClients: build.mutation({
      query: (args) => ({
        url: "clients",
        method: "POST",
        body: args,
      }),
      invalidatesTags: ["products"],
    }),
    editClients: build.mutation({
      query: ({ formData, id }) => ({
        url: `clients/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["products"],
    }),
    addBusiness: build.mutation({
      query: (args) => ({
        url: "businesses",
        method: "POST",
        body: args,
      }),
      invalidatesTags: ["business"],
    }),
    editBusinessStatus: build.mutation({
      query: (args) => ({
        url: `businesses/${args.id}/update-state?active=${args.active}`,
        method: "PATCH",
      }),
      invalidatesTags: ["business"],
    }),
  }),
});

export const {
  useGetBusinessesQuery,
  useAddBusinessMutation,
  useEditBusinessMutation,
  useEditBusinessStatusMutation,
  useGetClientsQuery,
  useAddClientsMutation,
  useEditClientsMutation,
} = api;
