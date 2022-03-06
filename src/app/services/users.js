import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-ingamer.herokuapp.com/api/users/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ``,
    }),
    getUser: builder.query({
      query: (id) => `${id}`,
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "register",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUsersQuery,
  useGetUserQuery,
} = usersApi;

export const { login } = usersApi;
