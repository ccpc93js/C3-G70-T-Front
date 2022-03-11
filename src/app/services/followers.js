import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const followersApi = createApi({
  reducerPath: "followersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-ingamer.herokuapp.com/api/followers/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFollowersOfId: builder.query({
      query: (id) => `followersToUserid/${id}`,
    }),

    createFollower: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetFollowersOfIdQuery, useCreateFollowerMutation } =
  followersApi;
