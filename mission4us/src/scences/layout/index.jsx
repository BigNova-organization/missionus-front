import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SideBare";
import Navbar from "../../components/Navbar";
// import { useDimensions } from 'react-native-hooks';

const Layout = () => {
  let data = {};
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const { width } = useDimensions().window;
  // console.log('isNonMobile', isNonMobile)
  useEffect(() => {
    if (!isNonMobile) {
      setIsSidebarOpen(false);
    } else if (isNonMobile) {
      setIsSidebarOpen(true);
    }
  }, [isNonMobile]);
  return (
    <Box display={"flex"} width="100%" height="100%">
      <Sidebar
        user={data}
        isNonMobile={isNonMobile}
        drawerWidth={isSidebarOpen ? "240px" : "70px"}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        type={"secondary"}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1}>

        <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
