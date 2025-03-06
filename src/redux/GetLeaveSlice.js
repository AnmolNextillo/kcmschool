// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, leaves, mySubjects } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hitGetLeave= createAsyncThunk("hitGetLeave", async () => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    console.log("Hit")
    const url = ApiBaseUrl + leaves;      
    const response = await axios.get(url,config);
    console.log("Response Get Leave ===> ",response.data)
    return response.data;
  } catch (error) {
    console.log("Error ====> ",error)
    throw error.response.data;
  }
});

const GetLeaveSlice = createSlice({
  name: "getLeaveReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearGetLeave: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hitGetLeave.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hitGetLeave.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(hitGetLeave.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearGetLeave } = GetLeaveSlice.actions;
export default GetLeaveSlice.reducer;