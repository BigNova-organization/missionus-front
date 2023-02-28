import { Box, Stack, Divider,useTheme, Chip } from "@mui/material";
import React from "react";
import Space from "../../../../components/outils/Space";
import { PrimaryText } from "../../../../components/utils/typography";


const Hobies = () => {
  const theme = useTheme();

  const data=[
    {nom:'Sport'},
    {nom:'Musique'},
    {nom:'Voyage'},
    {nom:'Cinema'},
    
   
    
  ]
  return (
    <>
    <Stack
    component={"div"}
      sx={{
        width: "100%",
        p: 4,
        bgcolor: theme.palette.background.default,
        borderRadius: 3,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
   
    >
  
     

        <PrimaryText
          fontWeight={"600"}
          fontSize={"35px"}
          text={"Hobbies"}
          color={theme.palette.primary.light}
        
        />

        
    </Stack>
    <Space space={15}/>
    <Stack
 
    sx={{
        display:'flex',
        gap:5,
        justifyContent:'center',
        flexWrap: 'wrap',
        width: "100%",
        p:3,
        bgcolor: theme.palette.background.default,
        // border:`2px solid ${theme.palette.primary.light}`,
        borderRadius: 6,
       
        
      }}
          direction={{
            xs: "column",
            sm: "column",
            lg: "row",
            md: "column",
            
          }} 
  
    >
      
      {
            data.map((item, index) => {
              return (
      <Stack 
          sx={{
        
        display:'flex',
        
        flex: '1 1 20%'
        
      }}
        >
          <Chip label={item.nom} sx={{bgcolor:theme.palette.primary.light,fontSize:18,p:3}}/>
          
      </Stack>
      
              
      )})}
      
       
       

     
    </Stack>

    </>
  );
};

export default Hobies;
