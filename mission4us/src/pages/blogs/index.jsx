import React, { useEffect } from "react";
import { Box, useTheme } from "@mui/material";

import "./styles.css";
import Head from "../../components/Head";



const Blogs = () => {
  const theme = useTheme();
  return (
    <Box className="dashboard">
      <Head title='Blogs' />
    </Box>
  );
};

export default Blogs;
