// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, getNotifications } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hitGetNotification= createAsyncThunk("hitGetNotification", async (payload) => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    const url = ApiBaseUrl + getNotifications+"?type="+payload.type;      
    console.log("Url ===> ",url)
    const response = await axios.get(url,config);
    console.log("Response GetNotification ===> ",response.data)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const GetNotificationSlice = createSlice({
  name: "getNotificationReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearGetNotification: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hitGetNotification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hitGetNotification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(hitGetNotification.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearGetSubject } = GetNotificationSlice.actions;
export default GetNotificationSlice.reducer;