// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { announceMents, ApiBaseUrl } from "../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hitAnnouncements= createAsyncThunk("hitAnnouncements", async () => {
  try {

    const token = await AsyncStorage.getItem('token');
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
    };
    console.log("Hit")
    const url = ApiBaseUrl + announceMents;      
    const response = await axios.get(url,config);
    console.log("Response announceMents ===> ",response.data)
    return response.data;
  } catch (error) {
    console.log("Error ====> ",error)
    throw error.response.data;
  }
});

const AnnouncementsSlice = createSlice({
  name: "announcementsReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearAnnouncements: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hitAnnouncements.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hitAnnouncements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(hitAnnouncements.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearAnnouncements } = AnnouncementsSlice.actions;
export default AnnouncementsSlice.reducer;