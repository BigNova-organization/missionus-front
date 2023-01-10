import React, { useEffect } from "react";
import { Box, useTheme } from "@mui/material";

import "./styles.css";
import Head from "../../components/Head";



const Documentation = () => {
  const theme = useTheme();
  return (
    <Box className="dashboard">
      <Head title='Documentation' />
    </Box>
  );
};

export default Documentation;
