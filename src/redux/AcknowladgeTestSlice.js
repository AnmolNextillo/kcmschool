// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ackTest, ApiBaseUrl } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hitAckTest = createAsyncThunk("hitAckTest", async (payload) => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    const url = ApiBaseUrl + ackTest;      
    const response = await axios.put(url,payload,config);
    console.log("Response ===> ",response.data)
    return response.data;
  } catch (error) {
    console.log("Error ===> ",error)
    throw error.response.data;
  }
});

const AcknowladgeTestSlice = createSlice({
  name: "ackTestReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearAckTest: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hitAckTest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hitAckTest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(hitAckTest.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearAckTest } = AcknowladgeTestSlice.actions;
export default AcknowladgeTestSlice.reducer;