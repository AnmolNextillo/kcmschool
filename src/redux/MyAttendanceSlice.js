// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, myAttendanceApi } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const myAttendanceData = createAsyncThunk("myAttendanceData", async () => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    const url = ApiBaseUrl + myAttendanceApi;      
    const response = await axios.get(url,config);
    console.log("Response myAttendance ===> ",response.data)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const MyAttendanceSlice = createSlice({
  name: "myAttendanceReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearMyClassMate: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(myAttendanceData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(myAttendanceData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(myAttendanceData.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearMyClassMate } = MyAttendanceSlice.actions;
export default MyAttendanceSlice.reducer;