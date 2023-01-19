import React, { useEffect } from "react";
import { Box, useTheme } from "@mui/material";

import "./styles.css";
import Head from "../../components/Head";



const Jobs = () => {
  const theme = useTheme();
  return (
    <Box className="dashboard">
      <Head title='Jobs' />
    </Box>
  );
};

export default Jobs;
