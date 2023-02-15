import React from "react";
import { UseHooks } from "../../pages/PageCv/Hooks";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
// import {TextField} from '@material-ui';
const InputFeilds = (props) => {
  const {
    error,
    id,
    value,
    onChange,
    autoComplete,
    label,
    type,
    multiline,
    rows,
    onBlur,
    select,
    margin,
    required,
    helperText,name,
    handleBlur,
    marginRight
  } = props;
  const { OnSubmit, initialState, validationSchema } = UseHooks();
  const { mode } = useSelector((state) => state.global);

  const classes = useStyles(mode);
  const theme = useTheme();

  return (
    <TextField
    name={name}
      error={error}
      helperText={helperText}
      className={mode == "dark" ? classes.inputStyles : classes.inputStylesDark}
      type={type}
      variant="outlined"
      margin="normal"
      id={id}
      label={label}
      autoComplete={autoComplete}
      onChange={(val) => {
        if(margin){
          onChange(val.target.value);
        }else{

          onChange(val);
        }
      }}
      multiline={multiline}
      minRows={rows}
      // onBlur={handleBlur}

      onBlur={onBlur}
      fullWidth
      select={select}
      style={{ marginRight: margin ? "0px" : "20px", }}
      InputLabelProps={{
        style: { color: theme.palette.secondary.light },
      }}
      required={required}
      InputProps={{
        style: { color: theme.palette.neutral.dark },
      }}
    />
  );
};

export default InputFeilds;

const useStyles = makeStyles((theme) => ({
  inputStyles: {
    flexGrow: 1,
    color: "#FFF",
    "&.MuiInputBase-input MuiOutlinedInput-input": {
      color: theme.palette.primary.light,
      backgroundColor: "#FFF",
    },
    "& .Mui-focused": {
      color: "#237a57",
      fontWeight: "bold",
    },


    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: ".5px solid #ccc",
      },
      "&:hover fieldset": {
        border: "2px solid #237a57",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #237a57",
      },
    },
  },

  inputStylesDark: {
    flexGrow: 1,
    color: "#FFF",
    "& .MuiInputBase-input MuiOutlinedInput-input": {
      color: "#FFF",
      backgroundColor: "#FFF",
    },
    "& .Mui-focused": {
      color: "#FFF",
      fontWeight: "bold",
    },

    "&.MuiFormLabel-root":{
      color: "#FFF",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: ".5px solid #ccc",
      color: "#FFF",

      },
      "&:hover fieldset": {
        border: "2px solid #237a57",
      color: "#FFF",

      },
      "&.Mui-focused fieldset": {
        border: "2px solid #237a57",
      color: "#FFF",

      },
    },
  },
}));
