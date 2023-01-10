import React from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronRightOutlined,
  HomeOutlined,
  Groups2Outlined,
  PublicOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  BookOutlined,
} from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "../FlexBetween";
import profileImage from "../../assets/user.png";
import logo from "../../assets/logo.png";
import CustDrawer from "./components/Drawer";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Admins",
    icon: null,
  },
  {
    text: "Users",
    icon: <Groups2Outlined />,
  },
  {
    text: "Calendar",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Recruitment",
    icon: <PublicOutlined />,
  },
  {
    text: "Gestion",
    icon: null,
  },
  {
    text: "Blogs",
    icon: <BookOutlined />,
  },
  {
    text: "Manage",
    icon: null,
  },
  {
    text: "Documentation",
    icon: <AdminPanelSettingsOutlined />,
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      <CustDrawer
        user={user}
        drawerWidth={drawerWidth}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isNonMobile={isNonMobile}
      >
        <Box width="100%">
          <Header isSidebarOpen={isSidebarOpen} />
        </Box>
        <ListItems
          navItems={navItems}
          setActive={setActive}
          active={active}
          isSidebarOpen={isSidebarOpen}
          navigate={navigate}
        />
        <BottomItems isSidebarOpen={isSidebarOpen} />
      </CustDrawer>
    </Box>
  );
};

export default Sidebar;

const Header = ({ isSidebarOpen }) => {
  const theme = useTheme();

  return (
    <>
      {isSidebarOpen && (
        <Box m="2rem 2rem 1.4rem 3rem">
          <FlexBetween color={theme.palette.secondary.light}>
            <Box display="flex" alignItems="center" gap="0.5rem">
              <Typography variant="h4" fontWeight="bold">
                BIGNOVA-BO
              </Typography>
            </Box>
          </FlexBetween>
        </Box>
      )}
      {!isSidebarOpen && (
        <Box
          m="2rem 0rem 1.4rem 20px"
          display={"flex"}
          alignItems="center"
          component={"img"}
          src={logo}
          width={"30px"}
          height="30px"
        />
      )}
    </>
  );
};

const ListItems = ({
  navItems,
  setActive,
  active,
  isSidebarOpen,
  navigate,
}) => {
  const theme = useTheme();

  return (
    <List>
      {navItems.map(({ text, icon }) => {
        if (!icon) {
          return (
            <Typography
              key={text}
              sx={{
                m: !isSidebarOpen ? "2rem 0 1rem 1rem" : "2rem 0 1rem 3rem",
                fontSize: !isSidebarOpen ? "11px" : "14px",
              }}
            >
              {text}
            </Typography>
          );
        }
        const lcText = text.toLowerCase();

        return (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(`/${lcText}`);
                setActive(lcText);
              }}
              sx={{
                backgroundColor:
                  active === lcText
                    ? theme.palette.secondary[700]
                    : "transparent",
                color:
                  active === lcText
                    ? theme.palette.grey[100]
                    : theme.palette.primary[100],
              }}
            >
              <ListItemIcon
                sx={{
                  ml: !isSidebarOpen ? ".6rem" : "2rem",
                  color:
                    active === lcText
                      ? theme.palette.grey[100]
                      : theme.palette.primary[200],
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
              {active === lcText && (
                <ChevronRightOutlined sx={{ ml: "auto" }} />
              )}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

const BottomItems = ({ isSidebarOpen }) => {
  const theme = useTheme();

  return (
    <Box position="absolute" bottom="2rem" width="100%">
      <Divider />
      <Box
        display={"flex"}
        alignItems="center"
        textTransform="none"
        gap="1rem"
        m={!isSidebarOpen ? "1rem 0rem 0 1rem" : "2rem 0rem 0 2rem"}
      >
        <Box
          component="img"
          alt="profile"
          src={profileImage}
          height="40px"
          width="40px"
          borderRadius="50%"
          sx={{ objectFit: "cover" }}
        />
        <Box textAlign="left">
          <Typography
            fontWeight="bold"
            fontSize="0.9rem"
            sx={{ color: theme.palette.secondary[100] }}
          >
            {"Reda Bekka"}
          </Typography>
          <Typography
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            {"All permission"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
