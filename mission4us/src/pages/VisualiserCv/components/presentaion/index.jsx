import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import imageProfile from "../../../../assets/profile.jpeg";
import Space from "../../../../components/outils/Space";
import { PrimaryText } from "../../../../components/utils/typography";

const Presentation = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        width: "100%",
        p: 4,
        bgcolor: theme.palette.background.default,
        borderRadius: 3,
      }}
      direction={{
        xs: "column",
        sm: "column",
        lg: "row",
        md: "column",
      }}
    >
      <Stack
        component={"div"}
        sx={{
          justifyContent: "center",

          display: "flex",
          alignItems: "center",
          mr: {
            xs: 0,
            sm: 0,
            lg: 8,
            md: 0,
          },
          mb: {
            xs: 4,
            sm: 6,
            lg: 0,
            md: 4,
          },
        }}
      >
        <Box
          component={"img"}
          src={imageProfile}
          width="220px"
          height="150px"
          sx={{
            borderRadius: "10px",
            border: `2px solid ${theme.palette.primary.light}`,
            mb: 1,
          }}
        />

        <PrimaryText
          fontWeight={"500"}
          fontSize={"25px"}
          text={"Thomas Muller"}
          color={theme.palette.primary.light}
        />

        <PrimaryText
          fontWeight={"500"}
          fontSize={"13px"}
          text={"Thomas Muller lorem ipsum"}
          color={theme.palette.primary.contrastText}
          lineHeight="2"
        />
        <PrimaryText
          fontWeight={"500"}
          fontSize={"13px"}
          text={"Thomas Muller "}
          color={theme.palette.primary.contrastText}
          lineHeight="1"
        />
      </Stack>
      <Box component={"div"}>
        <PrimaryText
          fontWeight={"500"}
          fontSize={"25px"}
          text={"Presentation"}
          color={theme.palette.primary.light}
        />
        <Space />
        <PrimaryText
          fontWeight={"500"}
          fontSize={"15px"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis quasi nesciunt facilis eaque, quibusdam voluptatem officia iusto ex porro soluta atque provident, dolorem laudantium, ab ea. Corporis, ea Culpa perspiciatis quasi nesciunt facilis eaque, quibusdam voluptatem officia iusto ex porro soluta atque providentCulpa perspiciatis quasi nesciunt facilis eaque, quibusdam voluptatem officia iusto ex porro soluta atque provident, dolorem laudantium, ab ea. Corporis, ea, dolorem laudantium, ab ea. Corporis, eadolore!"
          }
          color={theme.palette.primary.contrastText}
          lineHeight="20px"
        />
        <Space space={15}></Space>

        <Stack 
         sx={{
          
          display: "flex",
         justifyContent:'space-around',
       
         
          }}
          direction={{
            xs: "column",
            sm: "column",
            lg: "row",
            md: "column",
          }} 
        >
        <Box component={"div"} >
          <PrimaryText
            fontWeight={"500"}
            fontSize={"25px"}
            text={"Age"}
            color={theme.palette.primary.light}
          />
          <Space />
          <PrimaryText
            fontWeight={"500"}
            fontSize={"15px"}
            text={"29 ans"}
            color={theme.palette.primary.contrastText}
            lineHeight="20px"
          />
 

        </Box>
       
        <Box component={"div"}>
          <PrimaryText
            fontWeight={"500"}
            fontSize={"25px"}
            text={"Langue"}
            color={theme.palette.primary.light}
          />
          <Space />
          <PrimaryText
            fontWeight={"500"}
            fontSize={"15px"}
            text={"Anglais,Arabe,Francais"}
            color={theme.palette.primary.contrastText}
            lineHeight="20px"
          />
 

        </Box>

        <Box component={"div"}>
          <PrimaryText
            fontWeight={"500"}
            fontSize={"25px"}
            text={"Portable"}
            color={theme.palette.primary.light}
          />
          <Space />
          <PrimaryText
            fontWeight={"500"}
            fontSize={"15px"}
            text={"0782567809"}
            color={theme.palette.primary.contrastText}
            lineHeight="20px"
          />
 

        </Box>
        </Stack>
        <Space space={15}/>
        <Stack 
         sx={{
          
          display: "flex",
         justifyContent:'space-around',
         
          }}
          direction={{
            xs: "column",
            sm: "column",
            lg: "row",
            md: "column",
          }} 
        >
        <Box component={"div"} >
          <PrimaryText
            fontWeight={"500"}
            fontSize={"25px"}
            text={"Adresse"}
            color={theme.palette.primary.light}
          />
          <Space />
          <PrimaryText
            fontWeight={"500"}
            fontSize={"15px"}
            
            text={"7869 Paris, France"}
            color={theme.palette.primary.contrastText}
            lineHeight="20px"
            
          />
 

        </Box>
       
        <Box component={"div"}>
          <PrimaryText
            fontWeight={"500"}
            fontSize={"25px"}
            text={"Permis"}
            color={theme.palette.primary.light}
          />
          <Space />
          <PrimaryText
            fontWeight={"500"}
            fontSize={"15px"}
            text={"B,C"}
            color={theme.palette.primary.contrastText}
            lineHeight="20px"
          />
 

        </Box>

        <Box component={"div"}>
          <PrimaryText
            fontWeight={"500"}
            fontSize={"25px"}
            text={"Email"}
            color={theme.palette.primary.light}
          />
          <Space />
          <PrimaryText
            fontWeight={"500"}
            fontSize={"15px"}
            text={"Thomac.c@gmail.com"}
            color={theme.palette.primary.contrastText}
            lineHeight="20px"
          />
 

        </Box>

     
        </Stack>
        
      </Box>
    </Stack>
  );
};

export default Presentation;
