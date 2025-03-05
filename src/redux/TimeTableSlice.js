// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, timeTable } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hitTimeTable= createAsyncThunk("hitTimeTable", async (payload) => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    const url = ApiBaseUrl + timeTable;      
    const response = await axios.get(url,config);
    console.log("Response TimeTableSlice ===> ",response.data)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const TimeTableSlice = createSlice({
  name: "timeTableReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearTimeTable: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hitTimeTable.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hitTimeTable.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(hitTimeTable.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearTimeTable } = TimeTableSlice.actions;
export default TimeTableSlice.reducer;