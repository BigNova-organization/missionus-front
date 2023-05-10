import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState={
  
   user:[],
   loading:false,
   error:null
}


export const signUpUser = createAsyncThunk(
    'signup/signupUser',
    async (values) => {
      const url='http://api.mission4us.com/api/register';
      const response = await axios.post(url,values);
     
      // console.log(response,'register response')
      return response.data;
      
    }
  );

  const authSlice=createSlice({
    name:'user',
    initialState,
    extraReducers: builder => {
        // register
        builder.addCase(signUpUser.pending, state => {
          state.loading = true
        })
        builder.addCase(signUpUser.fulfilled, (state,action) => {
          state.loading = false
          state.user = action.payload;
          

        })
        builder.addCase(signUpUser.rejected, (state, action) => {
          state.loading = true
          state.error = action.error.message;
          
        })
      }
})


export default authSlice.reducer