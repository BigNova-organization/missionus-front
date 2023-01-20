import "./styles.css";
import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import Head from "../../../components/Head";
import Body from '../../../components/Body';
import { Formik } from "formik";
import InputFeilds from "../../../components/outils/InputFeilds";
import Space from "../../../components/outils/Space";
import RowBox from "../../../components/RowBox";
import Button from '@material-ui/core/Button';
import CustomButton from "../../../components/outils/customButton";

const AddJob = () => {
  const theme = useTheme();
 
  const initialValues={
    nom:'',
    prenom:'',
    description:'',
    secteur:''
    
  }
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
      <Typography color={theme.palette.secondary[700]} variant={"h1"}>
          Ajouter un job {" "}
      </Typography>
      <Formik
       initialValues={initialValues}
       
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
                <RowBox>
                  <InputFeilds 
                  label={"Nom"} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nom}
                  id='nom'
                  />
                  {errors.nom && touched.nom && errors.nom}
                  <InputFeilds 
                  label={"Prénom"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prenom} 
                  id='prenom'
                  />
                  {errors.prenom && touched.prenom && errors.prenom}
                </RowBox>
                <RowBox>
                  <InputFeilds 
                  label={"Secteur"} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.secteur}
                  id='secteur'
                  />
                  {errors.secteur && touched.secteur && errors.secteur}
                </RowBox>
               
                <RowBox>
                  <InputFeilds
                    label={"Description"}
                    multiline={true}
                    rows={4}
                    id="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                   
                  />
                  {errors.description && touched.description && errors.description}
                </RowBox>
                <Space space={20} />

               



                {/* <CustomButton
                  text="Ajouter"
                  variant="contained"
                  color="primary"
                  size="medium"
                 
                  onClick={OnSubmit}
                /> */}
                 <Button variant="contained" color="primary" size="medium" type="submit" disabled={isSubmitting} >Envoyer</Button> 
                 </form>
           )}
       </Formik>
      </Body>
    </Box>
  )
}

export default AddJob