import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Head from "../../../components/Head";
import Body from "../../../components/Body";
import { Formik, Field } from "formik";
import { TextField } from "@material-ui/core";
import InputFeilds from "../../../components/outils/InputFeilds";
import Space from "../../../components/outils/Space";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import RowBox from "../../../components/RowBox";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import SelectMenue from "../../../components/outils/SelectMenue";

const options = [
  // { value: '', label: '' },
  { value: "user1", name: "Fournisseur" },
  { value: "user2", name: "Client" },
];

const EditUser = ({ open, onClose }) => {
  const theme = useTheme();

  const initialValues = {
    nom: "John dev",
    user: "user1",
    tel: "0782305080",
    adresse: "Bejaia",
    compte: "dkdkkdfhs1234",
    registre: "john12345",
    nis: "j678",
    nif: "h987",
  };
  //   const [initialValues, setInitialValues] = useState({
  //     nom:'John dev',
  //     user:'user1',
  //     tel:'0782305080',
  //     adresse:'Bejaia',
  //     compte:'dkdkkdfhs1234',
  //     registre:'john12345',
  //     nis:'j678',
  //     nif:'h987'
  //   })

  //   const {nom,user,tel,adresse,compte,registre,nis,nif}=initialValues
  //   const handleInputChange=(e)=>{
  //     let {name,value}=e.target;
  //     setInitialValues({...initialValues,[name]:value});
  //    }

  // console.log(initialValues,'initval')

  const validationSchema = Yup.object().shape({
    nom: Yup.string().required("Nom est obligatoire"),
    user: Yup.string().required("Utilisateur est obligatoire"),
    tel: Yup.string().required("Téléphone est obligatoire"),
    adresse: Yup.string().required("Adresse est obligatoire"),
    compte: Yup.string(),
    registre: Yup.string().when("user", {
      is: (user) => user === "user1",
      then: Yup.string().required("Registre de commerce est obligatoire"),
      otherwise: Yup.string(),
    }),
    nis: Yup.string().when("user", {
      is: (user) => user === "user1",
      then: Yup.string().required("NIS est obligatoire"),
      otherwise: Yup.string(),
    }),
    nif: Yup.string().when("user", {
      is: (user) => user === "user1",
      then: Yup.string().required("NIF est obligatoire"),
      otherwise: Yup.string(),
    }),
  });
  const [showFileds, setShowFileds] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{display:'flex', alignItems:'center', padding:'20px 0 20px 20px',backgroundColor:theme.palette.background.default, color: theme.palette.primary.light,}}>
      <Tooltip title="Fermer">
      <Box onClick={onClose}><CloseIcon/></Box>
       </Tooltip>            
      <Typography  variant={"h4"} style={{paddingLeft:15}}> Editer un utilisateur {" "}</Typography>
      

      </div>
      
      

      <Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values, "myvalues");
            setTimeout(() => {
              setSubmitting(false);
            }, 4000);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <SelectMenue
                name="user"
                // selectionTitle="Client"
                data={options}
                handleOpen={(val) => {
                  setFieldValue("user", val);
                }}
                error={errors.user && touched.user && errors.user}
                helperText={errors.user && touched.user ? errors.user : ""}
                value={values.user}
                onBlur={() => {
                  setFieldTouched("user", true);
                }}
                onChange={handleChange}
                marginRight
                disabled={true}
              />

              <RowBox>
                <InputFeilds
                  name="nom"
                  id="nom"
                  label={"Nom complet"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nom}
                  required={true}
                  error={errors.nom && touched.nom}
                  helperText={errors.nom && touched.nom ? errors.nom : ""}
                />

                <InputFeilds
                  name="compte"
                  label={"Compte bancaire"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.compte}
                  id="compte"
                  // required={true}
                  // error={errors.compte && touched.compte}
                  // helperText={errors.compte && touched.compte ? errors.compte : ""}
                />
              </RowBox>

              <RowBox>
                <InputFeilds
                  name="tel"
                  label={"N° téléphone "}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tel}
                  id="tel"
                  required={true}
                  error={errors.tel && touched.tel}
                  helperText={errors.tel && touched.tel ? errors.tel : ""}
                />

                <InputFeilds
                  name="adresse"
                  label={"Adresse"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.adresse}
                  id="adresse"
                  required={true}
                  error={errors.adresse && touched.adresse}
                  helperText={
                    errors.adresse && touched.adresse ? errors.adresse : ""
                  }
                />
              </RowBox>
              {values.user === "user1" && (
                <>
                  <div style={{ marginRight: 20 }}>
                    <InputFeilds
                      name="registre"
                      label={"Registre de commerce"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.registre}
                      id="registre"
                      required={true}
                      error={errors.registre && touched.registre}
                      helperText={
                        errors.registre && touched.registre
                          ? errors.registre
                          : ""
                      }
                    />
                  </div>
                  <RowBox>
                    <InputFeilds
                      name="nis"
                      label={"NIS"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nis}
                      id="nis"
                      required={true}
                      error={errors.nis && touched.nis}
                      helperText={errors.nis && touched.nis ? errors.nis : ""}
                    />

                    <InputFeilds
                      name="nif"
                      label={"NIF"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nif}
                      id="nif"
                      required={true}
                      error={errors.nif && touched.nif}
                      helperText={errors.nif && touched.nif ? errors.nif : ""}
                    />
                  </RowBox>
                </>
              )}

              <Space space={20} />

              <div style={{ float: "right" }}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  size="medium"
                  style={{
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.background.default,
                  }}
                  type="submit"
                  disabled={isSubmitting}
                  sx={{ marginRight: 2 }}
                >
                  Valider
                </Button>
                <Button
                  variant="contained"
                  endIcon={<CloseIcon />}
                  size="medium"
                  color="error"
                  onClick={onClose}
                >
                  Annuler
                </Button>
              </div>

              <Space space={20} />
            </form>
          )}
        </Formik>
      </Body>
    </Box>
  );
};

export default EditUser;
