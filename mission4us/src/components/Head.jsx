import React from "react";
import { Box, useTheme } from "@mui/material";


const Head = ({title}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "25px",
        color: theme.palette.grey[100],
        fontSize: "22px",
        backgroundColor: theme.palette.primary.contrastText

      }}
    >
      {title}
    </Box>
  );
};

export default Head;

