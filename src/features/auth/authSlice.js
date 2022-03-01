import { createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../../app/services/users";

const initialState = {
  isAuthenticated: true,
  user: null,
  token: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(usersApi.endpoints.login.matchPending, (state, action) => {
        console.log("login pending", action);
      })
      .addMatcher(usersApi.endpoints.login.matchFulfilled, (state, action) => {
        console.log("login fulfilled", action);
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addMatcher(usersApi.endpoints.login.matchRejected, (state, action) => {
        console.log("login rejected", action);
      });
  },
});

export const {logout} = slice.actions;

export default slice.reducer;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;