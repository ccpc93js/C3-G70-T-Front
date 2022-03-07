import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-ingamer.herokuapp.com/api/posts/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "",
    }),
    getPost: builder.query({
      query: (id) => `${id}`,
    }),

    createPost: builder.mutation({
      query: (post) => ({
        url: "",
        method: "POST",
        body: post,
      }),
    }),
    updatePost: builder.mutation({
      query: (post) => ({
        url: `edit/${post.id}`,
        method: "PUT",
        body: post,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi;
