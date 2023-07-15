import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DetailsClientService from "./service";

export const getDetailsClient = createAsyncThunk(
  "CreateCvApi/post",
  async (object, thunkAPI) => {
    const token = localStorage.getItem("bearer-token");
    const {obj,onErrorAction,onSuccesAction}=object
    try {
     let res= await DetailsClientService.api(obj,token);
     console.log('res.status', res.status)
     if(res.status ==200){
       console.log('res', res.data)
       onSuccesAction('cv Created successfully')
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

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const DetailsProvidersSlice = createSlice({
  name: "DetailsProviders",
  initialState: {
    info: null,
    isLoading: false,
    message: "",
  },
  reducers: {
    resetCreateCv: (state) => {
      state.isLoading = false;
      state.info = null;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(getDetailsClient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDetailsClient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.info = action.payload;
      })
      .addCase(getDetailsClient.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
        state.info = null;
      });
  },
});

export const { resetCreateCv } = DetailsProvidersSlice.actions;
export default DetailsProvidersSlice.reducer;