// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, myClassMates } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hitMyClassMate = createAsyncThunk("hitMyClassMate", async (payload) => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    const url = ApiBaseUrl + myClassMates;      
    const response = await axios.get(url,config);
    console.log("Response ===> ",response.data)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const MyClassMateSlice = createSlice({
  name: "myClassMateReducer",

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
      .addCase(hitMyClassMate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hitMyClassMate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(hitMyClassMate.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearMyClassMate } = MyClassMateSlice.actions;
export default MyClassMateSlice.reducer;