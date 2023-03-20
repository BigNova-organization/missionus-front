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
import { useLocation, useParams } from "react-router-dom";

const VisualiserCv = ( props) => {


  const location = useLocation();
  const  state  = location.state;

  const theme = useTheme();
  return (
    <>
      <Head title="Visualiser Curriculum Vitae" retur/>
      <Body>
        <Stack>
          <Presentation state={state} />
          <Space space={20} />
          <Experience />
          <Space space={20} />
          <Formation />
          <Space space={20} />
          <Competence />
          <Space space={20} />
          <Hobies />
        </Stack>
      </Body>
    </>
  );
};

export default VisualiserCv;
