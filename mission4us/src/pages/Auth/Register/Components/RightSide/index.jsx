import { Box, useTheme } from "@mui/material";
import React from "react";
import { ReusableButton } from "../../../../../components/Button/Button.component";
import Space from "../../../../../components/outils/Space";
import { PrimaryText } from "../../../../../components/utils/typography";

const RightSide = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "60%",
          lg: "28%",
        },

        bgcolor: theme.palette.background.main,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
      p={4}
    >
      <Box>
        <PrimaryText
          fontWeight={"600"}
          fontSize={"22px"}
          text={"MISSION4US"}
          color={theme.palette.secondary.dark}
          lineHeight={"30px"}
          mr={1}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ReusableButton
          bigText={"ACCES CLIENT"}
          smallText={
            "Connectez-vous pour céer vos offfres et envoyer vos colis"
          }
          Primary
        />
        <ReusableButton
          bigText={"ACCES TRANSITAIRE"}
          smallText={
            "Connectez-vous pour accéder a toutes les offres de transits et gérer vos propositions"
          }
        />
      </Box>

      <Box sx={{ display: "flex" }}>
        <PrimaryText
          fontWeight={"400"}
          fontSize={{
            xs: "16px",
            sm: "12px",
            md: "12px",
            lg: "14px",
          }}
          text={"Tu as un compte ?"}
          color={theme.palette.secondary.dark}
          lineHeight={"20px"}
          mr={1}
        />

        <PrimaryText
          fontWeight={"400"}
          fontSize={"12px"}
          text={"s'identifier "}
          color={theme.palette.secondary.dark}
          lineHeight={"20px"}
          cursor
          textDecoration
          link
          to={"/login"}
        />
      </Box>
      <Space />
      <Box>
        Qui sommes-nous Conditions Générales d'Utilisation Politique de
        confidentialité Politique en matière de cookies Contactez nous Blog
      </Box>
    </Box>
  );
};

export default RightSide;
