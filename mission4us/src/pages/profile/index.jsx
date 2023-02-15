import React, { useState } from "react";
import { Box, Typography, useTheme ,Stack,} from "@mui/material";
import "./styles.css";
import { AccountCircle } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Body from "../../components/Body";
import Button from "@mui/material/Button";
import EditIcon from "@material-ui/icons/Edit";
import InputFeilds from "../../components/outils/InputFeilds";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import Space from "../../components/outils/Space";

const Profile = () => {
  const theme = useTheme();
  const [clicked, setclicked] = useState(false);
  return (
    <Box className="dashboard">
      <Box
        sx={{
          padding: "10px",
          color: theme.palette.grey[100],
          fontSize: "22px",
          backgroundColor: theme.palette.background.default,
          display: "flex",
          alignItems: "center",
        }}
      >
        <AccountCircle sx={{ fontSize: 50, marginRight: 2 ,color: theme.palette.primary.light}} />
        <p style={{color: theme.palette.primary.light}}> Reda Bekka</p>
      </Box>
      <Body>
        <Card
          sx={{
            width: "52%",
            backgroundColor:theme.palette.background.default,
            color: theme.palette.neutral.dark,
            
          }}
        >
          <CardHeader
            style={{ backgroundColor:theme.palette.neutral.dark, color: theme.palette.background.default }}
            title="Informations"
          ></CardHeader>
          <CardContent>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              paddingTop="15px"
              direction={{
                xs: "column",
                sm: "column",
                lg: "row",
                md: "column",
              }}
            >
              <div style={{ paddingBottom: 15 }}>
                <div>
                  {!clicked ? (
                    <>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight={600}
                      >
                        Nom
                      </Typography>
                      <Typography variant="body2" style={{ paddingBottom: 10 }}>
                        {"BEKKA"}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <InputFeilds label={"Nom"} id="nom" />
                    </>
                  )}
                </div>
                <div>
                  {!clicked ? (
                    <>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight={600}
                      >
                        Prenom
                      </Typography>
                      <Typography variant="body2" style={{ paddingBottom: 10 }}>
                        {"Reda"}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <InputFeilds label={"Prenom"} id="prenom" />
                    </>
                  )}
                </div>
                <div>
                  {!clicked ? (
                    <>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight={600}
                      >
                        Profession
                      </Typography>
                      <Typography variant="body2" >
                        {"Ingenieur en dev"}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <InputFeilds label={"Profession"} id="profession" />
                    </>
                  )}
                </div>
              </div>
              <div >
                <div>
                  {!clicked ? (
                    <>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight={600}
                      >
                        Email
                      </Typography>
                      <Typography variant="body2" style={{ paddingBottom: 10 }}>
                        {"Reda@gmail.com"}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <InputFeilds label={"Email"} id="email" />
                    </>
                  )}
                </div>
                <div>
                  {!clicked ? (
                    <>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight={600}
                      >
                        Numero de telephone
                      </Typography>
                      <Typography variant="body2" style={{ paddingBottom: 10 }}>
                        {"0782205066"}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <InputFeilds label={"Numero de telephone"} id="numTel" />
                    </>
                  )}
                </div>
                {!clicked ? (
                  <>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={600}
                    >
                      Adresse
                    </Typography>
                    <Typography variant="body2" style={{ paddingBottom: 10 }}>
                      {"Bejaia"}
                    </Typography>
                  </>
                ) : (
                  <>
                    <InputFeilds label={"Adresse"} id="adresse" />
                  </>
                )}
               
              </div>
            </Stack>
          </CardContent>
        </Card>
        <Space space={20} />
        {!clicked ? (
          <Button
            variant="contained"
            endIcon={<EditIcon />}
            size="medium"
            style={{
              backgroundColor:theme.palette.primary.light,
              color:theme.palette.background.default,
            
              float: "right",
            }}
            onClick={() => setclicked(true)}
          >
            Modifier
          </Button>
          
        ) : (
          <div style={{ float: "right" }}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              size="medium"
              style={{ backgroundColor:theme.palette.primary.light,
                color:theme.palette.background.default,}}
              type="submit"
              // disabled={isSubmitting}
              sx={{ marginRight: 2 }}

            >
              Valider
            </Button>
            <Button
              variant="contained"
              endIcon={<CloseIcon />}
              size="medium"
              color="error"
              onClick={() => setclicked(false)}
            >
              Annuler
            </Button>
          </div>
          
        )}
        <Space space={20} />
      </Body>
    </Box>
  );
};

export default Profile;
