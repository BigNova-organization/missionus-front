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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SocialMedia from "./components/rsociaux";


const VisualiserCv = ( props) => {


  const location = useLocation();
  const  state  = location.state;

  const theme = useTheme();
  const navigate = useNavigate();

  const onReturn = () => { 
    navigate('/PageCv')
   }
  
  return (
    <>
    <Head title="Visualiser Curriculum Vitae" retur btn onReturn={onReturn} />
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
          <Space space={20} />
          <SocialMedia/>
          <Space space={20} />
        </Stack>
      </Body>
    </>
  );
};

export default VisualiserCv;
