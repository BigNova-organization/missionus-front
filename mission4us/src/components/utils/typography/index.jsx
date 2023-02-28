import { Typography, useTheme } from "@mui/material";
import React from "react";



export const PrimaryText = ({
  fontSize,
  fontWeight,
  color,
  text,
  lineHeight,
  mr,
  cursor,
  maxWidth,
  backgroundColor
}) => {
  const theme = useTheme();

  return (
    <Typography
      fontWeight={fontWeight}
      fontSize={fontSize}
      maxWidth={maxWidth}
      lineHeight={lineHeight ? lineHeight : "30px"}
      sx={{
        color: color ? color : theme.palette.primary.dark,
        mr: mr ? mr : 0,
        cursor:cursor?"pointer":'default',
        backgroundColor:backgroundColor,

      }}
    >
      {text}
    </Typography>
  );
};

