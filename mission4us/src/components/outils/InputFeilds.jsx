import React from 'react'
import {  Typography } from '@mui/material'
import { Box } from '@mui/system'
import { UseHooks } from '../../pages/PageCv/Hooks';

import { TextField } from '@material-ui/core';

const InputFeilds = ({errors,id,value,onChange,autoComplete,label,type,multiline,rows,onBlur}) => {

  const { OnSubmit, initialState,validationSchema } = UseHooks();

  const classes = useStyles()

  return (
      <TextField
          error={!!errors}
          helperText={errors}
          className={classes.inputStyles}
          type={type}
          variant="outlined"
          margin="normal"
          // required
          id={id}
          label={label}
          autoComplete={autoComplete}
          // autoFocus
          // {...register("email")}
          value={value}
          onChange={onChange}
          multiline={multiline}
          minRows={rows}
          onBlur={onBlur}
          fullWidth
             
        />
     
  )
}

export default InputFeilds


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  inputStyles: {
    // width: "100%",
    margin:"10px",
    flexGrow:1,
    '&::placeholder': {
        color: "#237a57",
      },
    "& .Mui-focused": {
      color: "#237a57",
      fontWeight: "bold",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: ".5px solid #ccc",
        color: "#237a57",

      },
      "&:hover fieldset": {
        border: "2px solid #237a57",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #237a57",
      },
   
    },
  },

//   BoxImageGif: {
//     width: "279.78px",
//     height: "279.78px",
//     backgroundImage: "url(" + background + ")",
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//   },
}));

// export default useStyles;

