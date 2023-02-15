import "./styles.css";
import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import Head from "../../../components/Head";
import Body from '../../../components/Body';
import { Formik } from "formik";
import InputFeilds from "../../../components/outils/InputFeilds";
import Space from "../../../components/outils/Space";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import * as Yup from 'yup'
const AddJob = () => {
  const theme = useTheme();
 
  const initialValues={
    nom:'',
    prenom:'',
    description:'',
    secteur:''
    
  }

  const validationSchema=Yup.object().shape({
    nom: Yup.string()
      .required('Le nom est obligatoire'),
    prenom: Yup.string()
      .required('Le prenom est obligatoire'),
    secteur: Yup.string()
      .required('Le secteur est obligatoire'),
    description: Yup.string()
    .min(10, 'Description doit contenir au min 10 caracteres')
      .max(150, 'Description doit contenir au max 150 caracteres')
      .required('la description est obligatoire'),
   
  })
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        flex: 1,
      }}
    >
      <Head title="Page Ajout d'un Job" />
      <Body >
      {/* <Typography color={theme.palette.secondary[700]} variant={"h1"}>
          Ajouter un job {" "}
      </Typography> */}
      <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={(values,{setSubmitting}) => {
        console.log(values,'myvalues')
        setTimeout(() => {
          console.log(values,'myvalues')
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
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
                <Space space={20} />
                
                <InputFeilds
                    label={"Nom"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nom}
                    id="nom"
                    required={true}
                    error={errors.nom && touched.nom}
                    helperText={errors.nom && touched.nom ? errors.nom : ""}
                  />
                 
                  <InputFeilds 
                  label={"Prénom"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prenom} 
                  id='prenom'
                  required={true}
                    error={errors.prenom && touched.prenom}
                    helperText={errors.prenom && touched.prenom ? errors.prenom : ""}
                  />
                 
                
                
                  <InputFeilds 
                  label={"Secteur"} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.secteur}
                  id='secteur'
                  required={true}
                    error={errors.secteur && touched.secteur}
                    helperText={errors.secteur && touched.secteur ? errors.secteur : ""}
                  />
                  
                
               
                
                  <InputFeilds
                    label={"Description"}
                    multiline={true}
                    rows={4}
                    id="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    required={true}
                    error={errors.description && touched.description}
                    helperText={errors.description && touched.description ? errors.description : ""}
                   
                  />
               
                
                <Space space={20} />

                <div style={{ float: "right" }}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  size="medium"
                  style={{backgroundColor:theme.palette.primary.light,color:theme.palette.background.default}}
                  type="submit"
                  disabled={isSubmitting}
                 
                >
                  Valider
                </Button>
                </div>
                <Space space={20} />
                 </form>
           )}
       </Formik>
      </Body>
    </Box>
  )
}

export default AddJob