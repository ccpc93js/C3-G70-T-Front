import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageApi = createApi({
  reducerPath: "imageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-ingamer.herokuapp.com/api/uploads/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "multipart/form-data");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    uploadAvatar: builder.mutation({
      query: (file) => ({
        url: "avatar",
        method: "POST",
        body: file,
      }),
    }),
    uploadBG: builder.mutation({
      query: (file) => ({
        url: "backgroundImage",
        method: "POST",
        body: file,
      }),
    }),
    uploadPosts: builder.mutation({
      query: (file) => ({
        url: "posts",
        method: "POST",
        body: file,
      }),
    }),
  }),
});

export const {
  useUploadAvatarMutation,
  useUploadBGMutation,
  useUploadPostsMutation,
} = imageApi;

export const uploadImage = async (image) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "ingamer");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dkr9yv2oa/image/upload",
    {
      method: "POST",
      body: data,
    }
  );
  const file = await res.json();
  return new Promise((resolve, reject) => {
    if (file.secure_url) {
      resolve(file.secure_url);
    } else {
      reject(file.error);
    }
  });
};
