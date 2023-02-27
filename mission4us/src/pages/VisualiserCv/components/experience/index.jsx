import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import imageProfile from "../../../../assets/profile.jpeg";
import Space from "../../../../components/outils/Space";
import { PrimaryText } from "../../../../components/utils/typography";

const Experience = () => {
  const theme = useTheme();
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
          text={"Experience Professionnelle"}
          color={theme.palette.primary.light}
          sx={{
            borderRadius: "10px",
            border: `2px solid ${theme.palette.primary.light}`,
            mb: 1,
          }}
        />

 
    </Stack>
    <Space space={15}/>
    <Stack
      sx={{
        width: "100%",
        p: 4,
        bgcolor: theme.palette.background.default,
        border:`2px solid ${theme.palette.primary.light}`,
        borderRadius: 3,
      }}
  
    >
      
      <Box component={"div"}>
      <Stack 
      sx={{
        display:'flex',
        justifyContent:'space-between'
      }}
          direction={{
            xs: "column",
            sm: "column",
            lg: "row",
            md: "column",
          }} 
        >
      
        <PrimaryText
          fontWeight={"500"}
          fontSize={"25px"}
          text={"Nom de l'entreprise"}
          color={theme.palette.primary.light}
        />
       

       
        <Stack
          direction={{
            xs: "column",
            sm: "column",
            lg: "row",
            md: "column",
          }} 
          >
        <PrimaryText
          fontWeight={"500"}
          fontSize={"15px"}
          text={"Lieux"}
          color={theme.palette.primary.light}
          mr={"10px"}
          
       
        />
          <PrimaryText
          fontWeight={"500"}
          fontSize={"12px"}
          text={"Lorem ipsum"}
          color={theme.palette.primary.contrastText}
        />
        </Stack>
        <PrimaryText
          fontWeight={"600"}
          fontSize={"18px"}
          text={"2 ans"}
          color={theme.palette.primary.light}
        />
         </Stack>
        <Space />
        <Space space={15}/>
        <PrimaryText
          fontWeight={"500"}
          fontSize={"15px"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis quasi nesciunt facilis eaque, quibusdam voluptatem officia iusto ex porro soluta atque provident, dolorem laudantium, ab ea. Corporis, ea Culpa perspiciatis quasi nesciunt facilis eaque, quibusdam voluptatem officia iusto ex porro soluta atque providentCulpa perspiciatis quasi nesciunt facilis eaque, quibusdam voluptatem officia iusto ex porro soluta atque provident, dolorem laudantium, ab ea. Corporis, ea, dolorem laudantium, ab ea. Corporis, eadolore!"
          }
          color={theme.palette.primary.contrastText}
          lineHeight="20px"
          
        />
        <Space space={15}/>
        <Stack
        sx={{float:'right'}}
          direction={{
            xs: "column",
            sm: "column",
            lg: "row",
            md: "column",
          }} 
          >
        <PrimaryText
          fontWeight={"500"}
          fontSize={"15px"}
          text={"Annee"}
          color={theme.palette.primary.light}
          mr={"10px"}
          
       
        />
          <PrimaryText
          fontWeight={"500"}
          fontSize={"15px"}
          text={"2023"}
          color={theme.palette.primary.light}
        />
        </Stack>

      </Box>
    </Stack>

    </>
  );
};

export default Experience;
