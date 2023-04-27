import "./styles.css";
import React, { useEffect } from 'react'
import { Box, TextField, Typography, useTheme } from "@mui/material";
import Head from "../../../components/Head";
import Body from '../../../components/Body';
import { Formik } from "formik";
import InputFeilds from "../../../components/outils/InputFeilds";
import Space from "../../../components/outils/Space";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import * as Yup from 'yup'
import { useParams } from "react-router-dom";
import { fetchJob } from "../../../Redux/jobs/slice";
import { useDispatch } from "react-redux";

const UpdateJob = () => {
  const theme = useTheme();
 const id=useParams()
 console.log(id,'id')
  const initialValues={
    name:'',
    description:'',
    
  }
  const validationSchema=Yup.object().shape({
    name: Yup.string()
      .required('Le nom du job est obligatoire'),
    description: Yup.string()
    .min(10, 'Description doit contenir au min 10 caracteres')
      .max(150, 'Description doit contenir au max 150 caracteres')
      .required('La description est obligatoire'),
   
  })
const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchJob(id))
 }, [dispatch])
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
       onSubmit={(values) => {
        console.log(values,'edit job values')
        // setTimeout(() => {
        //   console.log(values,'myvalues')
        //   setSubmitting(false);
        // }, 4000);
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
                    label={"Intitule"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    id="name"
                    required={true}
                    error={errors.name && touched.name}
                    helperText={errors.name && touched.name ? errors.name : ""}
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
                  onClick={handleSubmit}
                 
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

export default  UpdateJob