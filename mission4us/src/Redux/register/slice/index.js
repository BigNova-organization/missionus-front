import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import registerService from '../service';

const initialState={
  
   user:[],
   loading:false,
   error:null
}


// export const signUpUser = createAsyncThunk(
//     'signup/signupUser',
//     async (values) => {
//       const url='http://api.mission4us.com/api/register';
//       const response = await axios.post(url,values);
     
//       // console.log(response,'register response')
//       return response.data;
      
//     }
//   );

export const signUpUser = createAsyncThunk(
  "signup/signupUser",
  async (object, thunkAPI) => {
    // const token = localStorage.getItem("bearer-token");
    // console.log('object', object)
// 
    const {obj,onErrorAction,onSuccesAction}=object
    try {
     let res= await registerService.api(obj);
     console.log('res.status', res.status)
     if(res.status ==201){
       console.log('res', res.data)
       onSuccesAction()
        return res.data
     }else{
      onErrorAction()
     }

    } catch (error) {
      const message =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      onErrorAction()
      console.log('message', message)

      return thunkAPI.rejectWithValue(message);
    }
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