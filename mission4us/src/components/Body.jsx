import React from "react";
import { Box, useTheme } from "@mui/material";


const Body = ({children}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "35px 25px",
        color: theme.palette.grey[100],
        fontSize: "22px",
        // backgroundColor: theme.palette.background.default ,
        width:"100%",
        // backgroundColor:theme.palette.grey[700],

      }}
    >
      {children}
    </Box>
  );
};

export default Body;

