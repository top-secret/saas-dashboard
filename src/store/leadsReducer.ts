import { createSlice } from "@reduxjs/toolkit";
import { getAllLeads } from "./leadsActions";
const initialState = {
  leads: [],
  loading: false,
  error: false,
  success: false,
};

const leadSlice= createSlice({
  name: "leads",
  initialState,
  reducers: {},
  extraReducers: {
    // register user
    [getAllLeads.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getAllLeads.fulfilled]: (state, { payload }) => {
        debugger
      state.loading = false;
      state.success = true; // registration successful
      state.leads = payload
    },
    [getAllLeads.rejected]: (state, { payload }) => {
        debugger
      state.loading = false;
      state.error = payload;
    },
  },
});

export default leadSlice.reducer;
