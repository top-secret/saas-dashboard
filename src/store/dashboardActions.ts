import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const dashboardUrl = "https://run.mocky.io/v3/83d0026e-66f5-40dd-9ddf-54e488fe07b4"

export const getDshboardData = createAsyncThunk(
    "dashboard",
    async () => {
      try {
        const response = await axios.get(`${dashboardUrl}`);
  
        if(response.status === 200){
          return response.data
        }
      } catch (error) {
        // return custom error message from backend if present
        if (error.response && error.response.data.message) {
          //return rejectWithValue(error.response.data.message);
        } else {
          //return rejectWithValue(error.message);
        }
      }
    }
  );
  