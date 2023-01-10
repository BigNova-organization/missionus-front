import React from "react";
import { Box, useTheme } from "@mui/material";

 interface props {
    title:string
}
 
const Head = ({title}:props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "25px",
        color: theme.palette.grey[100],
        fontSize: "22px",
        backgroundColor: theme.palette.background.default 

      }}
    >
      {title}
    </Box>
  );
};

export default Head;

