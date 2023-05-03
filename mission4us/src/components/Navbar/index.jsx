import React, { useEffect, useState } from "react";
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
import { logout } from "../../Redux/logout/slice";
import Keycloak from "keycloak-js";
import { fetchAccount } from "../../Redux/account/slice";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  let initOptions = {
    url: "https://auth.mission4us.com/auth",
    realm: "local_tests",
    clientId: "m4us_tests",
    
    
    // KeycloakResponseType: 'code'
    };
  const keycloak = new Keycloak(initOptions);
  // const handleClose = () => {
  //   // localStorage.removeItem('bearer-token'),
  //   // localStorage.removeItem('refresh-token'),
  //   // localStorage.removeItem('user'),
  //   // localStorage.clear()
  //   // dispatch(logout)
    
  //   // navigate('register')

  //   keycloak.logout()
  //   keycloak.logout()
  // }

  const navigate = useNavigate();
  const account = useSelector((state) => state.account?.user);
  const status = useSelector((state) => state.account?.status);
  const error = useSelector((state) => state.account?.error);
  const token = localStorage.getItem("bearer-token");
 
  
  const isTokenExpired=(token)=> {
    // Vérifier si le jeton est expiré
    const expirationDate = new Date(token.expiration);
    return expirationDate < new Date();
  }
 
  

  const mode = useSelector((state) => state.global.mode);
  useEffect(() => {
    // Vérifier si le jeton est expiré ou n'est pas présent
    if (!token || isTokenExpired(token)) {
      // Déconnecter l'utilisateur et le rediriger vers la page de connexion
      dispatch(logout());
      window.location.href = '/login';
    } else {
      // Récupérer la liste des clients
      dispatch(fetchAccount());
    }
  }, [dispatch, token]);

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
                  {account?.login}
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
             
              <MenuItem onClick={()=>keycloak.logout()}>Log Out</MenuItem>
              
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
