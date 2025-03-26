// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl,tests } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hitTests = createAsyncThunk("hitTests", async (payload) => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    const url = ApiBaseUrl + tests;      
    const response = await axios.get(url,config);
    console.log("Response ===> ",response.data)
    return response.data;
  } catch (error) {
    console.log("Error ===> ",error)
    throw error.response.data;
  }
});

const GetTestsSlice = createSlice({
  name: "getTestsReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearTests: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hitTests.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hitTests.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(hitTests.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearTests } = GetTestsSlice.actions;
export default GetTestsSlice.reducer;