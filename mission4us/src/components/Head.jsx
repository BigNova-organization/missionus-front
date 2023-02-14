import React from "react";
import { Box, useTheme } from "@mui/material";


const Head = ({title}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "25px",
        color: theme.palette.primary.light,
        fontSize: "22px",
        backgroundColor: theme.palette.background.default

      }}

    >
      {title}

 
    </Box>
  );
};

export default Head;

