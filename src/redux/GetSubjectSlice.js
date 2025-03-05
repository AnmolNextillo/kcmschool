// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, mySubjects } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hitGetSubject= createAsyncThunk("hitGetSubject", async (payload) => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    const url = ApiBaseUrl + mySubjects;      
    const response = await axios.get(url,config);
    console.log("Response GetSubjectSlice ===> ",response.data)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const GetSubjectSlice = createSlice({
  name: "getSubjectReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearGetSubject: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hitGetSubject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hitGetSubject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(hitGetSubject.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearGetSubject } = GetSubjectSlice.actions;
export default GetSubjectSlice.reducer;