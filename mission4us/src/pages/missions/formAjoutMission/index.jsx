// import "./styles.css";
import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import Head from "../../../components/Head";
import Body from '../../../components/Body';
import { Formik } from "formik";
import InputFeilds from "../../../components/outils/InputFeilds";
import Space from "../../../components/outils/Space";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

import * as Yup from 'yup'
const AddMission = ({open,onClose}) => {
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

      <Head title="Ajouter une Mission" style={{backgroundColor:'black'}}/>
      
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
                
                
                  <InputFeilds 
                  label={"Nom"} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nom}
                  id='nom'
                  />
                    <div style={{color:'red',fontSize:15}}>
                  {errors.nom && touched.nom && errors.nom}
                  </div>
                  <InputFeilds 
                  label={"Prénom"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prenom} 
                  id='prenom'
                  />
                    <div style={{color:'red',fontSize:15}}>
                  {errors.prenom && touched.prenom && errors.prenom}
                  </div>
                
                
                  <InputFeilds 
                  label={"Secteur"} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.secteur}
                  id='secteur'
                  />
                    <div style={{color:'red',fontSize:15}}>
                  {errors.secteur && touched.secteur && errors.secteur}
                  </div>
                
               
                
                  <InputFeilds
                    label={"Description"}
                    multiline={true}
                    rows={4}
                    id="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                   
                  />
                    <div style={{color:'red',fontSize:15}}>
                  {errors.description && touched.description && errors.description}
                  </div>
                
                <Space space={20} />

                <div style={{float:'right'}}>
                <Button variant="contained" 
                  endIcon={<CloseIcon />} 
                  size='medium' 
                  color="error" 
                  sx={{marginRight:2}}
                  onClick={onClose}
                  
                  >
                    Annuler
                  </Button>
                

                
                <Button variant="contained" 
                  endIcon={<SendIcon />} 
                  size='medium' 
                  style={{backgroundColor:'#237a57'}}
                  type="submit" 
                  disabled={isSubmitting}
                  
                  >
                    Valider
                  </Button>
                </div>
                 
                
                 </form>
           )}
       </Formik>
      </Body>
    </Box>
  )
}

export default AddMission