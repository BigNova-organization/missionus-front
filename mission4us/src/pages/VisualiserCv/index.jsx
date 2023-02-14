import React, { useEffect } from "react";
import { Box, Stack, useTheme } from "@mui/material";
import Head from "../../components/Head";
import Presentation from "./components/presentaion";
import Body from "../../components/Body";

const VisualiserCv = () => {
  const theme = useTheme();
  return (
    <>
      <Head title="Visualiser Curriculum Vitae" />
      <Body>
        <Stack >
          <Presentation />
        </Stack>
      </Body>
    </>
  );
};

export default VisualiserCv;
