import React from "react";
import { Box, useTheme } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";

const Head = ({ title, retur }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "25px",
        color: theme.palette.primary.light,
        fontSize: "22px",
        backgroundColor: theme.palette.background.default,
        display: "felx",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
          textDecoration: retur ? "underline" : "none",
        },
      }}
    >
      {retur ? (
        <ChevronLeft sx={{ color: theme.palette.primary.light }} />
      ) : null}
      {title}
    </Box>
  );
};

export default Head;
