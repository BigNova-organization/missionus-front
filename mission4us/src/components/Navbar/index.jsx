import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  ChevronLeft,
} from "@mui/icons-material";

import profileImage from "../../assets/user.png";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import FlexBetween from "../FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../Redux/modeTheme";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const navigate = useNavigate();

  const mode = useSelector((state) => state.global.mode);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          backgroundColor: theme.palette.neutral.main,
        }}
      >
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {!isSidebarOpen ? <MenuIcon 
            
            sx={{color: theme.palette.secondary.light}}
            /> : <ChevronLeft 
            sx={{color: theme.palette.secondary.light}}
            />}
          </IconButton>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {mode == "dark" ? (
              <DarkModeOutlined
                sx={{
                  fontSize: "25px",
                  color: theme.palette.primary.contrastText,
                }}
              />
            ) : (
              <LightModeOutlined
                sx={{
                  fontSize: "25px",
                  color: theme.palette.secondary.light,
                }}
              />
            )}
          </IconButton>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color:  theme.palette.secondary.light}}
                >
                  {"reda bekka"}
                </Typography>
                <Typography
                  fontSize=".8rem"
                  sx={{
                    color: theme.palette.secondary.light,
                    fontWeight: "500",
                  }}
                >
                  {"occupation"}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{
                  color: theme.palette.secondary.light,
                  fontSize: "25px",
                }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate(`/${"profile"}`);
                }}
              >
                My profile
              </MenuItem>
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
