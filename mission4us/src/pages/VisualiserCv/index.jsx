import React, { useEffect } from "react";
import { Box, Divider, Stack, useTheme } from "@mui/material";
import Head from "../../components/Head";
import Presentation from "./components/presentaion";
import Body from "../../components/Body";
import Experience from "./components/experience";
import Space from "../../components/outils/Space";
import Formation from "./components/formations";
import Competence from "./components/competence";
import Hobies from "./components/hobie";


const VisualiserCv = () => {
  const theme = useTheme();
  return (
    <>
      <Head title="Visualiser Curriculum Vitae" />
      <Body>
        <Stack >
          <Presentation />
          <Space space={20}/>
          <Experience/>
          <Space space={20}/>
          <Formation/>
          <Space space={20}/>
          <Competence/>
          <Space space={20}/>
        <Hobies/>
          
        </Stack>
      </Body>
    </>
  );
};

export default VisualiserCv;
