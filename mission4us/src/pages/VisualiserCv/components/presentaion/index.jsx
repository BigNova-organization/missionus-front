import { Box, Stack, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

import imageProfile from "../../../../assets/profile.jpeg";
import Space from "../../../../components/outils/Space";
import { PrimaryText } from "../../../../components/utils/typography";

const Presentation = ({ state }) => {
  const theme = useTheme();

  // console.log('competence',JSON.stringify(state.competence))
  const [Age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(state.date);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    let data = calculateAge();
    setAge(data);
  }, [state.date]);

  return (
    <Stack
      sx={{
        width: "100%",
        p: 4,
        bgcolor: theme.palette.background.default,
        borderRadius: 3,
      }}
      direction={{
        xs: "column",
        sm: "column",
        lg: "row",
        md: "column",
      }}
    >
      <Stack
        component={"div"}
        sx={{
          justifyContent: "center",

          display: "flex",
          alignItems: "center",
          mr: {
            xs: 0,
            sm: 0,
            lg: 8,
            md: 0,
          },
          mb: {
            xs: 4,
            sm: 6,
            lg: 0,
            md: 4,
          },
        }}
      >
        <Box
          component={"img"}
          src={state.profile}
          width="220px"
          height="150px"
          sx={{
            borderRadius: "10px",
            border: `2px solid ${theme.palette.primary.light}`,
            mb: 1,
          }}
        />

        <PrimaryText
          fontWeight={"500"}
          fontSize={"25px"}
          text={`${state.nom} ${state.prenom}`}
          color={theme.palette.primary.light}
        />

        <PrimaryText
          fontWeight={"500"}
          fontSize={"13px"}
          text={state.apropos}
          color={theme.palette.primary.contrastText}
          lineHeight="2"
        />
      </Stack>
      <Box component={"div"}>
        <PrimaryText
          fontWeight={"500"}
          fontSize={"25px"}
          text={"Presentation"}
          color={theme.palette.primary.light}
        />
        <Space />
        <PrimaryText
          fontWeight={"500"}
          fontSize={"15px"}
          text={state.presentation}
          color={theme.palette.primary.contrastText}
          lineHeight="20px"
        />
        <Space space={15}></Space>

        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
          direction={{
            xs: "column",
            sm: "column",
            lg: "row",
            md: "column",
          }}
        >
          <Box component={"div"}>
            <PrimaryText
              fontWeight={"500"}
              fontSize={"25px"}
              text={"Age"}
              color={theme.palette.primary.light}
            />
            <Space />
            <PrimaryText
              fontWeight={"500"}
              fontSize={"15px"}
              text={`${Age} ans`}
              color={theme.palette.primary.contrastText}
              lineHeight="20px"
            />
          </Box>

          <Box component={"div"}>
            <PrimaryText
              fontWeight={"500"}
              fontSize={"25px"}
              text={"Langue"}
              color={theme.palette.primary.light}
            />
            <Space />
            <PrimaryText
              fontWeight={"500"}
              fontSize={"15px"}
              text={state.langue}
              color={theme.palette.primary.contrastText}
              lineHeight="20px"
            />
          </Box>

          <Box component={"div"}>
            <PrimaryText
              fontWeight={"500"}
              fontSize={"25px"}
              text={"Portable"}
              color={theme.palette.primary.light}
            />
            <Space />
            <PrimaryText
              fontWeight={"500"}
              fontSize={"15px"}
              text={state.phone}
              color={theme.palette.primary.contrastText}
              lineHeight="20px"
            />
          </Box>
        </Stack>
        <Space space={15} />
        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
          direction={{
            xs: "column",
            sm: "column",
            lg: "row",
            md: "column",
          }}
        >
          <Box component={"div"}>
            <PrimaryText
              fontWeight={"500"}
              fontSize={"25px"}
              text={"Adresse"}
              color={theme.palette.primary.light}
            />
            <Space />
            <PrimaryText
              fontWeight={"500"}
              fontSize={"15px"}
              text={state.adresse}
              color={theme.palette.primary.contrastText}
              lineHeight="20px"
            />
          </Box>

          <Box component={"div"}>
            <PrimaryText
              fontWeight={"500"}
              fontSize={"25px"}
              text={"Permis"}
              color={theme.palette.primary.light}
            />
            <Space />
            <PrimaryText
              fontWeight={"500"}
              fontSize={"15px"}
              text={state.permis}
              color={theme.palette.primary.contrastText}
              lineHeight="20px"
            />
          </Box>

          <Box component={"div"}>
            <PrimaryText
              fontWeight={"500"}
              fontSize={"25px"}
              text={"Email"}
              color={theme.palette.primary.light}
            />
            <Space />
            <PrimaryText
              fontWeight={"500"}
              fontSize={"15px"}
              text={state.email}
              color={theme.palette.primary.contrastText}
              lineHeight="20px"
            />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Presentation;
