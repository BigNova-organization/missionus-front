
import React from 'react'
import { Box,Typography, useTheme } from "@mui/material";
import Head from "../../../components/Head";
import Body from '../../../components/Body';
import { Formik ,Field } from "formik";
import InputFeilds from "../../../components/outils/InputFeilds";
import Space from "../../../components/outils/Space";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import * as Yup from 'yup'
import RowBox from '../../../components/RowBox';
import CustomSelect from '../../../components/CustomSelect';
import DatePickers from '../../../components/datePicker';
// import "./styles.css";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from "@material-ui/core/IconButton";
import RadionButton from '../../../components/radioButton';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const DevisMission = ({open,onClose}) => {
  const theme = useTheme();
 
  const initialValues={
  
    datedeb:'',
    datefin:'',
    prix:'',
    confirmdate:''
    
    
  }

  const validationSchema=Yup.object().shape({
    datedeb: Yup.date()
      .required('Date début est obligatoire'),
    datefin: Yup.date().required('Date de fin est obligatoire'),
    prix: Yup.number('Prix'),
    confirmdate:Yup.string().required("veuillez confirmer la date de debut")
   
      
   
  })
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
       
       
      }}
    >
 <div style={{display:'flex', alignItems:'center', padding:'20px 0 20px 20px',backgroundColor:theme.palette.background.default, color: theme.palette.primary.light,}}>
      <Tooltip title="Fermer">
      <IconButton aria-label="close" style={{ color: theme.palette.primary.light,}} onClick={onClose}>
        <CloseIcon />
      </IconButton>
       </Tooltip>            
      <Typography  variant={"h4"} style={{paddingLeft:15}}> Devis de la mission {" "}</Typography>
      

      </div>
      
      <Body >
     
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
         setFieldValue,
         
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} >
                
                
               
                <div style={{marginRight:20}}>
                <InputFeilds 
                  label={"Fourchette du prix"} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prix}
                  id='prix'
                  required={false}
                  error={errors.prix && touched.prix}
                  helperText={errors.prix && touched.prix ? errors.prix : ""}
                  
               
                  />
               </div>
                

                  <Space space={20} />
               
                   <RowBox>
                 
                   
                   <DatePickers
                    id="datedeb"
                    label={"Date Debut *"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.datedeb}
                    error={errors.datedeb && touched.datedeb && errors.datedeb}
                    helperText={
                      errors.datedeb && touched.datedeb ? errors.datedeb : ""
                    }
                   
                  />
                
                
                <Space space={20} />
                  <DatePickers
                    id="datefin"
                    label={"Date Fin"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.datefin}
                    error={errors.datefin && touched.datefin && errors.datefin}
                    helperText={
                      errors.datefin && touched.datefin ? errors.datefin : ""}
                      
                  />
                 
                  </RowBox> 

                  <Field name="confirmdate">
                    {({ field, meta }) => (
                        <RadioGroup {...field}>
                        <FormControlLabel
                            value="option1"
                            control={<Radio  style={{color: theme.palette.primary.light}}/>}
                            label="Je Confirme la date de debut"
                            style={{color:theme.palette.primary.contrastText}}
                        />
                    
                        </RadioGroup>
                    )}
                </Field>
                    {touched.confirmdate && errors.confirmdate ? (
                    <div style={{color:'red',fontSize:13}}>{errors.confirmdate}</div>
                    ) : null}
                  
                <Space space={20} />

                <div style={{float:'right'}}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  size="medium"
                  style={{backgroundColor:theme.palette.primary.light,color:theme.palette.background.default}}
                  type="submit"
                  disabled={isSubmitting}
                  sx={{ marginRight: 2 }}
                >
                  Valider
                </Button>
                <Button variant="contained" 
                  endIcon={<CloseIcon />} 
                  size='medium' 
                  color="error" 
                 
                  onClick={onClose}
                  
                  >
                    Annuler
                  </Button>
              
                </div>
                 
                
                 </form>
           )}
       </Formik>
      </Body>
    </Box>
  )
}

export default DevisMission