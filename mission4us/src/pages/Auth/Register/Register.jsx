import { Box, useTheme } from '@mui/material'
import React from 'react'
import LeftSide from './Components/LeftSide';
import RightSide from './Components/RightSide';

const Register = () => {
  const theme = useTheme();

  return (
    <Box sx={{ height:"100%",width:"100%"  ,flexGrow:1 ,display:"flex",justifyContent:"space-between" ,flexDirection:"row"}}>
        <LeftSide/>
        <RightSide/>
    </Box>
  )
}

export default Register