// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, appointments } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hitBookAppointment= createAsyncThunk("hitBookAppointment", async (payload) => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    console.log("Appointment Payload ====> ",payload)
    const url = ApiBaseUrl + appointments;      
    const response = await axios.post(url,payload,config);
    console.log("Response Appointment ===> ",response.data)
    return response.data;
  } catch (error) {
    console.log("Error ====> ",error)
    throw error.response.data;
  }
});

const BookAppointmentSlice = createSlice({
  name: "bookAppointmentReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearAppointment: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hitBookAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hitBookAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(hitBookAppointment.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearAppointment } = BookAppointmentSlice.actions;
export default BookAppointmentSlice.reducer;