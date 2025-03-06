// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, events } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hitEvent= createAsyncThunk("hitEvent", async () => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    console.log("Hit")
    const url = ApiBaseUrl + events;      
    const response = await axios.get(url,config);
    console.log("Response Event ===> ",response.data)
    return response.data;
  } catch (error) {
    console.log("Error ====> ",error)
    throw error.response.data;
  }
});

const GetEventSlice = createSlice({
  name: "getEventReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearGetEvent: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hitEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hitEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(hitEvent.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearGetEvent } = GetEventSlice.actions;
export default GetEventSlice.reducer;