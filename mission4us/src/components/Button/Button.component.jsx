import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { PrimaryText } from "../utils/typography";
import Icon from "@mui/icons-material/East";
export const ReusableButton = ({ bigText, smallText, onClick, Primary }) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        paddingY: 2,
        my: 2,
        bgcolor: Primary
          ? theme.palette.secondary.dark
          : theme.palette.primary.light,
        width: {
          xs: "90%",
          sm: "80%",
          md: "90%",
          lg: "80%",
        },
        "&:hover": {
          bgcolor: Primary
            ? theme.palette.secondary.dark
            : theme.palette.primary.light,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <PrimaryText
            fontWeight={"600"}
            fontSize={{
              xs: "16px",
              sm: "13px",
              md: "14px",
              lg: "16px",
            }}
            text={bigText}
            color={
              !Primary
                ? theme.palette.primary.dark
                : theme.palette.primary.light
            }
            lineHeight={"35px"}
          />
          <PrimaryText
            fontWeight={"400"}
            fontSize={{
              xs: "11px",
              sm: "12px",
              md: "13px",
              lg: "12px",
            }}
            text={smallText}
            color={
              !Primary
                ? theme.palette.primary.dark
                : theme.palette.primary.light
            }
            lineHeight={"20px"}
          />
        </Box>
        <Icon
          style={{
            marginLeft: "8px",
            color: !Primary
              ? theme.palette.primary.dark
              : theme.palette.primary.light,
          }}
        />
      </Box>
    </Button>
  );
};

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
