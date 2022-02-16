import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { usersApi } from "./services/users";
import auth from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    usersApi: usersApi.reducer,
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
