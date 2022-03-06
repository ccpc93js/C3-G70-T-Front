import { createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../../app/services/users";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginFromLS: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(usersApi.endpoints.login.matchPending, (state, action) => {
        console.log("login pending");
      })
      .addMatcher(usersApi.endpoints.login.matchFulfilled, (state, action) => {
        const user = {
          id: action.payload.id,
          username: action.payload.username,
          email: action.payload.emial,
        };
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(user));
        state.isAuthenticated = true;
        state.user = user;
        state.token = action.payload.token;
      })
      .addMatcher(usersApi.endpoints.login.matchRejected, (state, action) => {
        console.log("login rejected", action);
      });
  },
});

export const { logout, loginFromLS } = slice.actions;

export default slice.reducer;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
