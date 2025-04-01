// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, getAppVersionsApi } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAppVersion = createAsyncThunk("getAppVersion", async () => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    const url = ApiBaseUrl + getAppVersionsApi;      
    const response = await axios.get(url,config);
    console.log("Response appointments ===> ",response.data)
    return response.data;
  } catch (error) {
    console.log("Error ====> ",error)
    throw error.response.data;
  }
});

const GetAppVersionSlice = createSlice({
  name: "ggetAppVersionReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearGetAppointment: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAppVersion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAppVersion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAppVersion.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearGetAppointment } = GetAppVersionSlice.actions;
export default GetAppVersionSlice.reducer;