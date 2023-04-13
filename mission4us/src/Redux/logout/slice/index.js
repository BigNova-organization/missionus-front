import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'


const initialState={
    initialState: { isAuthenticated: false }
}



const logoutSlice=createSlice({
    name:'logout',
    initialState,
    reducers:{
      
        logout:(state,action)=>{
            state.isAuthenticated = false;
            localStorage.removeItem('bearer-token')
            localStorage.removeItem('refresh-token')
            localStorage.removeItem('user')
        }

    },
   
})

export const {logout}=logoutSlice.actions
export default logoutSlice.reducer