import { createSlice } from "@reduxjs/toolkit";
import { getDshboardData } from "./dashboardActions";
const initialState = {
  dashboardData: {},
  loading: false,
  error: false,
  success: false,
};

const dashboardSlice= createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: {
    [getDshboardData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getDshboardData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.dashboardData = payload
    },
    [getDshboardData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default dashboardSlice.reducer;
