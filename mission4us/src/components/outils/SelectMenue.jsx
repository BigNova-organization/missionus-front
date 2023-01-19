import React from "react";
import { Select, MenuItem } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  select: {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #237a57",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    overflow: "hidden",
    flexGrow: 1,
    margin: "10px",
  },
  menuItem: {
    // background: '#237a57',
    // paddingLeft:"20px",
    '&:hover': {
      background: '#237a5709'
    },
    color: '#000'
  },
  InputProps: {
    color: '#ff0000',
    backgroundColor:"#23a"
  },

}));

const SelectMenue = ({ label, data, onChange }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const classes = useStyles();

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      onChange={handleChange}
      displayEmpty
      variant="outlined"
      //   style={{ width: "100%" }}
      className={classes.select}
      MenuProps={{
        maxHeight: 200,
        paddingLeft: "20px",
      }}

      InputProps={{
        classes: {
          select: classes.InputProps,
        },
      }}

      
    >
      <MenuItem value="" disabled>
        <em>Selectionner une langue</em>
      </MenuItem>
      <MenuItem classes={{root: classes.menuItem}} value={10}>Français</MenuItem>
      <MenuItem classes={{root: classes.menuItem}} value={20}>English</MenuItem>
      {/* <MenuItem value={30}>Thirty</MenuItem> */}
    </Select>
  );
};
export default SelectMenue;
