import React, { useEffect } from "react";
import { Box, Stack, useTheme } from "@mui/material";
import Head from "../../components/Head";
import Presentation from "./components/presentaion";
import Body from "../../components/Body";
import Experience from "./components/experience";
import Space from "../../components/outils/Space";

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
        </Stack>
      </Body>
    </>
  );
};

export default VisualiserCv;
