import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Box, FormHelperText, Stack, useTheme } from "@mui/material";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  select: {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #237a57",
    },

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      paddingLeft: "20px",
      width: "100%",
    },
  },
  menuItem: {
    "&:hover": {
      background: "#237a5709",
    },
    color: "#000",
  },

  icon: {
    fill: theme.palette.info.contrastText,
  },
  iconDark: {
    fill: "#237a57",
  },
}));

const SelectMenue = ({
  label,
  data,
  handleOpen,
  selectionTitle,
  error,
  helperText,
  value,
  onBlur,
  marginRight
}) => {
  const theme = useTheme();
  const { mode } = useSelector((state) => state.global);

  const handleChange = (event) => {
    handleOpen(event.target.value);
  };
  const classes = useStyles();
  return (
    <Stack width={"100%"}>
      <Select
        labelId={"demo-simple-select-label"}
        id={"demo-simple-select"}
        value={value}
        onChange={handleChange}
        displayEmpty
        variant="outlined"
        style={{
          flexGrow: 1,
           marginRight: marginRight ? "20px" : "0px",
          color: theme.palette.secondary.light,
          border: `.2px solid ${error ? theme.palette.error.main :theme.palette.secondary.light}`,
        }}
        className={classes.select}
        inputProps={{
          classes: {
            icon: mode == "light" ? classes.icon : classes.iconDark,
          },
        }}
        error={error}
        onBlur={onBlur}
        
      >
        <MenuItem value="" disabled>
          {selectionTitle}
        </MenuItem>
        {data.map((item, index) => {
          return (
            <MenuItem
              key={index}
              classes={{ root: classes.menuItem }}
              value={item.value}
            >
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText sx={{color:theme.palette.error.main , pl:3}}>{helperText}</FormHelperText>
    </Stack>
  );
};
export default SelectMenue;
