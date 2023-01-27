import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

export default function DatePickers({id,label,onChange,onBlur,value}) {
  const classes = useStyles();

  return (
   
      <TextField
        id={id}
        label={label}
        type="date"
        variant="outlined"
        // defaultValue=""
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={classes.inputStyles}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        fullWidth

      />
   
  );
}
