import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getxsrfToken } from '../../infoAccount/slice';
import { useSelector, useDispatch } from "react-redux";

const initialState = {
    missions: [],
  status: 'idle',
  error: null,
  
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
   

    const token = localStorage.getItem("bearer-token");
    const url='https://api.mission4us.com/api/missions';
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        // 'X-XSRF-TOKEN': getxsrfToken,
        
        
      },
    });
   
    console.log(response,'missions response')
    return response.data;
    
  }
);

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default missionSlice.reducer;
