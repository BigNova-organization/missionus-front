import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const PrimaryNavigationButton = ({
  type,
  onClick,
  bgcolor,
  text,
  textColor,
  state,
  pathname,
}) => (
  <Button
    variant="contained"
    sx={{
      p: 1,
      mr: 2,
      bgcolor,
    }}
  >
    {text}
  </Button>
);
