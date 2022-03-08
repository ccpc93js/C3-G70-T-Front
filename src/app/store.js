import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { usersApi } from "./services/users";
import { postApi } from "./services/posts";
import { imageApi } from "./services/images";
import auth from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    usersApi: usersApi.reducer,
    postApi: postApi.reducer,
    imageApi: imageApi.reducer,
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      postApi.middleware,
      imageApi.middleware
    ),
});
