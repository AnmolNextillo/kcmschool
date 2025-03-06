// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, leaves, mySubjects } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hitApplyLeave= createAsyncThunk("hitApplyLeave", async (payload) => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    console.log("Apply Leave Payload ====> ",payload)
    const url = ApiBaseUrl + leaves;      
    const response = await axios.post(url,payload,config);
    console.log("Response Get Leave ===> ",response.data)
    return response.data;
  } catch (error) {
    console.log("Error ====> ",error)
    throw error.response.data;
  }
});

const ApplyLeaveSlice = createSlice({
  name: "applyLeaveReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearApplyLeave: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hitApplyLeave.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hitApplyLeave.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(hitApplyLeave.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearApplyLeave } = ApplyLeaveSlice.actions;
export default ApplyLeaveSlice.reducer;