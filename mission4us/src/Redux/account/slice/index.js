import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

const initialState = {
    user: [],
  status: 'idle',
  error: null,
  
};

export const fetchAccount = createAsyncThunk(
  'account/fetchAccount',
  async () => {
   

    
    const url='http://api.mission4us.com:80/api/account';
    const response = await axios.get(url);
   
    console.log(response,'account response')
    return response.data;
    
  }
);

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccount.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchAccount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default accountSlice.reducer;
