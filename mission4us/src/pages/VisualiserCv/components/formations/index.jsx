import { Box, Stack, Divider,useTheme } from "@mui/material";
import React from "react";
import Space from "../../../../components/outils/Space";
import { PrimaryText } from "../../../../components/utils/typography";


const Formation = () => {
  const theme = useTheme();

  const data=[
    {date:'2017-2018',diplome:'licence informatique',universite:'  Université Bejaia',lieux:'Bejaia'},
    {date:'2018-2020',diplome:' Master informatique',universite:'Université  Bejaia',lieux:'Bejaia'},
    {date:'2020-2021',diplome:'Ingenieur informatique',universite:'Kepler',lieux:'Bejaia'},
    {date:'2021-2023',diplome:'licence informatique',universite:'Yassir',lieux:'Alger'},
    
    
    
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
          text={"Formations"}
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
        width: "100%",
        
        bgcolor: theme.palette.background.default,
        border:`2px solid ${theme.palette.primary.light}`,
        borderRadius: 6,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex: '1 1 20%'
        
      }}
        >
      <Stack sx={{backgroundColor:theme.palette.primary.dark,width: "100%",textAlign:'center',p:1,borderTopRightRadius:25,borderTopLeftRadius:25}}>
        <PrimaryText
          fontWeight={"500"}
          fontSize={"25px"}
          text={item.date}
          color={theme.palette.primary.light}
         
        />
       </Stack>

       
        
        <PrimaryText
          fontWeight={"600"}
          fontSize={"18px"}
          text={item.diplome}
          color={theme.palette.primary.contrastText}
        />
        <Space/>
          <PrimaryText
          fontWeight={"600"}
          fontSize={"18px"}
          text={item.universite}
          color={theme.palette.primary.contrastText}
        />
        <Space/>
        
        
        
        {/* <Divider variant="middle" color={theme.palette.primary.light} />
        <Space/> */}
         <Stack style={{height:2,width:"50%",backgroundColor:theme.palette.primary.light}}/>
         <Space/>
        <PrimaryText
          fontWeight={"600"}
          fontSize={"18px"}
          text={item.lieux}
          color={theme.palette.primary.contrastText}
         
        />
       <Space/>
      </Stack>
      
              
      )})}
      
       
       

     
    </Stack>

    </>
  );
};

export default Formation;
