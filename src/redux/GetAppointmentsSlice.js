// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, appointments } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hitGetAppointments = createAsyncThunk("hitGetAppointments", async () => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    const url = ApiBaseUrl + appointments;      
    const response = await axios.get(url,config);
    console.log("Response appointments ===> ",response.data)
    return response.data;
  } catch (error) {
    console.log("Error ====> ",error)
    throw error.response.data;
  }
});

const GetAppointmentsSlice = createSlice({
  name: "getAppointmentsReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearGetAppointment: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hitGetAppointments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hitGetAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(hitGetAppointments.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearGetAppointment } = GetAppointmentsSlice.actions;
export default GetAppointmentsSlice.reducer;