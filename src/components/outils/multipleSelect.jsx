import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { FormHelperText, useTheme } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import {  useSelector } from "react-redux";
import { PrimaryText } from "../utils/typography";
import Space from "./Space";
import { useEffect } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function MultipleSelectCheckmarks({
  label,
  handleOpen,
  selectionTitle,
  error,
  helperText,
  value,
  onBlur,
  marginRight,
  disabled,
  multiple,
  renderValue,
  setFieldValue,
  status,
  data,name,personNames

}) {
  const [personName, setPersonName] = React.useState(personNames);
  const theme = useTheme();
  const { mode } = useSelector((state) => state.global);


const handleChange = (event) => {
  const { value } = event.target;
  setPersonName(value);
  setFieldValue(name, value.join(", "));
};
 

  const classes = useStyles();
  return (
      <FormControl sx={{  width: "100%" }}>
        {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
        {status?.length == 0 || status == 'loading' ? (
          <div>chargement ...</div>
        ) : (

          <>
          <Space space={"20px"} />
          
          <PrimaryText
                    fontWeight={"600"}
                    fontSize={"20px"}
                    text={label}
                    color={
                      theme.palette.secondary.light
                    }
                  />
          
          <Space space={"20px"} />
          
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
            style={{
              flexGrow: 1,
              marginRight: marginRight ? "20px" : "0px",
              color: theme.palette.secondary.light,
              border: `.2px solid ${
                error ? theme.palette.error.main : theme.palette.secondary.light
              }`,
            }}
            // className={classes.select}
            inputProps={{
              classes: {
                icon: mode == "light" ? classes.icon : classes.iconDark,
              },
            }}
            InputLabelProps={{
              style: {
                color:theme.palette.secondary.dark,
              },
            }}
          >
            {data?.map((i) => (
              <MenuItem key={i.name} value={i.name}>
                <Checkbox checked={personName.indexOf(i.name) > -1} />

                <ListItemText primary={i.name} />
              </MenuItem>
            ))}
          </Select>
          </>
        )}
        <FormHelperText sx={{ color: theme.palette.error.main, pl: 3 }}>
          {helperText}
        </FormHelperText>
      </FormControl>
  );
}

 