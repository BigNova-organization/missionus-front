import React, { useEffect } from "react";
import { Box, useTheme } from "@mui/material";

import "./styles.css";
import Head from "../../components/Head";



const Profile = () => {
  const theme = useTheme();
  return (
    <Box className="dashboard">
      <Head title='Profile' />
    </Box>
  );
};

export default Profile;
