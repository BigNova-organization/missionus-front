import "./styles.css";
import React from 'react'
import { Box, TextField, Typography, useTheme } from "@mui/material";
import Head from "../../../components/Head";
import Body from '../../../components/Body';
import { Formik } from "formik";
import InputFeilds from "../../../components/outils/InputFeilds";
import Space from "../../../components/outils/Space";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import * as Yup from 'yup'

const UpdateJob = () => {
  const theme = useTheme();
 
  const initialValues={
    nom:'',
    description:'',
    
  }
  const validationSchema=Yup.object().shape({
    nom: Yup.string()
      .required('Le nom est obligatoire'),
    description: Yup.string()
    .min(10, 'Description doit contenir au min 10 caracteres')
      .max(150, 'Description doit contenir au max 150 caracteres')
      .required('La description est obligatoire'),
   
  })

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        flex: 1,
      }}
    >
      <Head title="Page Modification d'un Job" />
      <Body>
      {/* <Typography color={theme.palette.secondary[700]} variant={"h1"}>
          Modifier un job {" "}
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
                  id='nom'
                  />
                  {/* {errors.nom && touched.nom && errors.nom ? (
                    <div style={{color:'red',fontSize:15}}>{errors.nom}</div>
                  ) : null} */}
                  <div style={{color:'red',fontSize:15}}>
                  {errors.nom && touched.nom && errors.nom}
                  </div>
                  
                  
                
                  <Space space={20} />
               
                
                  <InputFeilds
                    label={"Description"}
                    multiline={true}
                    rows={4}
                    id="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  //   helperText={touched.description ? errors.description : ""}
                  // error={touched.description && Boolean(errors.description)}
                   
                  />
                  <div style={{color:'red',fontSize:15}}>
                  {errors.description && touched.description && errors.description}
                  </div>
                
                <Space space={20} />

                <Button variant="contained" 
                  endIcon={<SendIcon />} 
                  size='medium' 
                  style={{backgroundColor:'#237a57'}}
                  type="submit" 
                  disabled={isSubmitting}
                  >
                    Valider
                  </Button>
                 </form>
           )}
       </Formik>
      </Body>
    </Box>
  )
}

export default  UpdateJob