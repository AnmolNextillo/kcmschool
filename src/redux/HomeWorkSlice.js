// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, homeWork } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hitHomeWork= createAsyncThunk("hitHomeWork", async (payload) => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    const url = ApiBaseUrl + homeWork;      
    const response = await axios.get(url,config);
    console.log("Response HomeWorkSlice ===> ",response.data)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const HomeWorkSlice = createSlice({
  name: "homeWorkReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearHomeWork: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hitHomeWork.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hitHomeWork.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(hitHomeWork.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearHomeWork } = HomeWorkSlice.actions;
export default HomeWorkSlice.reducer;