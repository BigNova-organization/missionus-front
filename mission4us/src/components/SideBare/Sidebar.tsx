import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { navigationItems } from "../../config";
import { useTheme } from "../../theme/theme";
import { Theme } from "../../theme/Theme.model";
import "./Sidebare.styles.css";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/user.png";
import { Box, Divider, Typography } from "@mui/material";
import FlexBetween from "../FlexBetween";
import { SettingsOutlined } from "@mui/icons-material";


type SideBareType = "primary" | "secondary";

interface SideBareProps {
  type: SideBareType;
  theme: Theme;
  onClick?: (...args: any[]) => void;
  user: any;
  isSidebarOpen: boolean;
  setIsSidebarOpen?:any;
  isNonMobile:boolean;
  drawerWidth:string
}

const Sidebar: React.FC<SideBareProps> = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const drawerWidth="240px"
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  const { setCurrentTheme } = useTheme();
  const { theme } = useTheme();

  const useAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };
  const user = useAuth();
  const location = useLocation();
  const navigation = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigation("/login");
  };

  return (
    <motion.div
      animate={{
        width: !isOpen ? "230px" : "40px",

        transition: {
          duration: 0.5,
          type: "spring",
          damping: 10,
        },
      }}
      className={`sidebar sidebare--${type}`}
    >
      <>
        <div>
          <div className="user">
            <AnimatePresence>
              {!isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  ADMIN
                </motion.h1>
              )}
            </AnimatePresence>

            <div onClick={toggle} className="button-bar">
              <FaBars fontSize={20} />
            </div>
          </div>

          {!isOpen && (
            <div className="Profile">
              <img
                alt="profile-user"
                width="80px"
                height="80px"
                src={logo}
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  border: "1px solid white ",
                }}
              />
              <div className="text-user">
                <text>Reda Bekka</text>
                <text className="user-role">All-Permissions </text>
              </div>
            </div>
          )}

          <div className="sidebar__items">
            {user && (
              <div>
                {navigationItems.sidebar.map((item, index) => (
                  <div className="container-item">
                    <div>
                      {index === 0 ? (
                        <div
                          className={
                            location.pathname.includes(item.to)
                              ? "flex-active"
                              : "flex"
                          }
                        >
                        <Link
                            key={item.text}
                            to={item.to}
                            className={
                              location.pathname.includes(item.to)
                                ? "sidebar_active"
                                : "text-item-list-render"
                            }
                          >
                            <div className="item-row">
                              <img
                                src={item.icon}
                                alt="profile-user"
                                width="30px"
                                height="30px"
                                className="image-content"
                              />

                              {item.name}
                            </div>
                          </Link>
                        </div>
                      ) : (
                        <text className={ !isOpen ? `textname--${type}` : `textnameClose--${type}`  }>{item.name}</text>
                      )}
                    </div>

                    <div>
                      {item
                        ? item?.list?.map((item) => {
                            return (
                              <div
                                className={
                                  location.pathname.includes(item.to)
                                    ? "flex-active"
                                    : "flex"
                                }
                              >
                                <Link
                                  to={item?.to}
                                  className={
                                    location.pathname.includes(item.to)
                                      ? "sidebar_active"
                                      : "text-item-list-render"
                                  }
                                >
                                  <div className="item-row">
                                    <img
                                      src={item.iconWhite}
                                      alt="profile-user"
                                      width="30px"
                                      height="30px"
                                      className="image-content"
                                    />

                                    {item.name}
                                  </div>
                                </Link>
                              </div>
                            );
                          })
                        : null}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* <div className={"content__buttons"}>
          <Button
            type={"primary"}
            theme={theme}
            onClick={() => setCurrentTheme("light")}
          >
            Light theme
          </Button>
          <Button
            type={"secondary"}
            theme={theme}
            onClick={() => setCurrentTheme("dark")}
          >
            Dark theme
          </Button>
        </div> */}
          </div>
        </div>
        <Divider />


        <Box textTransform="none"  sx={{display:"flex",gap:"1rem", margin:"1.5rem ",alignItems:"center"}}
        >
            {!isOpen && 
            <>
            <Box
                component="img"
                alt="profile"
                src={logo}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  // sx={{ color: theme.palette.secondary[100] }}
                >
                  {"reda"}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  // sx={{ color: theme.palette.secondary[200] }}
                >
                  {"Developer"}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  // color: theme.palette.secondary[300],
                  fontSize: "25px ",
                }}
              />
            </>
              
              }
            </Box>
      </>
    </motion.div>
  );
};

export default Sidebar;

{/* <div>
  <div className="logout">
    {!user && (
      <Link
        to="/login"
        className={
          location.pathname === "/login" ? "sidebar_active" : ""
        }
      >
        Login
      </Link>
    )}
  </div>
  {location.pathname !== "/login" && (
    <button onClick={logout}>logout</button>
  )}
</div> */}