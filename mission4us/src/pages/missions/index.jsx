import React, { useEffect,useState,useCallback } from "react";
import { Box, useTheme } from "@mui/material";

import "./styles.css";
import Head from "../../components/Head";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Drawer from "../../components/Drawer/Drawer.jsx";


const Missions = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handleClose = useCallback(() => setOpen(false), []);
  return (
    <Box className="dashboard">
      <Box
      sx={{
        padding: "10px",
        color: theme.palette.grey[100],
        fontSize: "22px",
        backgroundColor: theme.palette.background.default ,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'

      }}
    >
      <div><p>Missions</p></div>
      <div>
      <Button variant="contained" 
      endIcon={<AddIcon />} 
      size='medium' 
      style={{backgroundColor:'#237a57'}}
      onClick={handleOpen}
      >
        Ajouter
      </Button>
      <Drawer anchor="right" open={open} onClose={handleClose} />
      </div>
    </Box>
    </Box>
  );
};

export default Missions;
