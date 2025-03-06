// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { annualCalender, ApiBaseUrl } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hitAnnualCalender= createAsyncThunk("hitAnnualCalender", async () => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    const url = ApiBaseUrl + annualCalender;      
    const response = await axios.get(url,config);
    console.log("Response GetAnnualCalender ===> ",response.data)
    return response.data;
  } catch (error) {
    console.log("Error ====> ",error)
    throw error.response.data;
  }
});

const GetAnnualCalender = createSlice({
  name: "annualCalenderReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearAnnualCalender: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hitAnnualCalender.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hitAnnualCalender.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(hitAnnualCalender.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearAnnualCalender } = GetAnnualCalender.actions;
export default GetAnnualCalender.reducer;