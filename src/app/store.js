import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { usersApi } from "./services/users";
import { postApi } from "./services/posts";
import { imageApi } from "./services/images";
import { commentsApi } from "./services/comments";
import auth from "../features/auth/authSlice";
import { followersApi } from "./services/followers";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    usersApi: usersApi.reducer,
    postApi: postApi.reducer,
    imageApi: imageApi.reducer,
    followersApi: followersApi.reducer,
    commentsApi: commentsApi.reducer,
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      postApi.middleware,
      imageApi.middleware,
      followersApi.middleware,
      commentsApi.middleware
    ),
});
