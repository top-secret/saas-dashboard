import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./authenticationActions";
const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
      state.userInfo = payload
      state.userToken = payload.token;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // login successful
      state.userInfo = payload
      state.userToken = payload.token;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
