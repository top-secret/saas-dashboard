import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const leadsUrl = "https://run.mocky.io/v3/8b97c004-b6d6-4607-9064-99001a0b7835"

export const getAllLeads = createAsyncThunk(
    "getAllLeads",
    async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        //await axios.post(`${loginUrl}`, { email, password }, config);
        const response = await axios.get(`${leadsUrl}`);
  
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
  