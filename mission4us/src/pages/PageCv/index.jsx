import React, { useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";

import "./styles.css";
import Head from "../../components/Head";
import Body from "../../components/Body";
import { Formik } from "formik";
import { UseHooks } from "./Hooks";
import CustomButton from "../../components/outils/customButton";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import InputFeilds from "../../components/outils/InputFeilds";
import Space from "../../components/outils/Space";
import RowBox from "../../components/RowBox";
import SelectMenue from "../../components/outils/SelectMenue";
import useStyles from "./styles";

const PageCv = () => {
  const theme = useTheme();

  const { OnSubmit, initialState, validationSchema } = UseHooks();

  const classes = useStyles()

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        flex: 1,
      }}
    >
      <Head title="Page Cv" />
      <Body>
        <Typography color={theme.palette.secondary[700]} variant={"h1"}>
          Créez votre cv{" "}
        </Typography>
        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={(values, formikAction) => {
            const { code } = values;

            let object = {
              code,
              token,
              userName,
            };
            // console.log('log object ' ,  object )
            // dispatch(onConfirmCode(object));
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            touched,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => {
            const { code } = values;

            return (
              <>
                <Space space={20} />
                <RowBox>
                  <InputFeilds label={"sexe"} />
                  <InputFeilds label={"marié"} />
                </RowBox>
                <RowBox>
                  <InputFeilds label={"Téléphone"} />
                  <InputFeilds label={"E-mail"} />
                </RowBox>
                <RowBox>
                  <InputFeilds label={"Date de naissance"} />
                  <InputFeilds label={"Adresse"} />
                </RowBox>
                <RowBox>
                  <InputFeilds
                    label={"A propos de moi"}
                    multiline={true}
                    rows={4}
                    id="standard-multiline-static"
                  />
                </RowBox>
                <Space space={20} />

                <Box className={classes.containerSelect}> 
                  <SelectMenue />
                  <SelectMenue />
                </Box>



                {/* <CustomButton
                  text="Go Back"
                  variant="contained"
                  color="primary"
                  size="medium"
                  startIcon={<ArrowBackIosIcon />}
                  onClick={OnSubmit}
                /> */}
              </>
            );
          }}
        </Formik>
      </Body>
    </Box>
  );
};

export default PageCv;
