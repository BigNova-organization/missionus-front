
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
const options = [
  // { value: '', label: '' },
  { value: 'client1', label: 'Reda Bekka' },
  { value: 'client2', label: 'Samia Kh' },
 


]
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

      {/* <Head title="Ajouter une Mission" style={{backgroundColor:'black'}}/> */}
      <div style={{display:'flex', alignItems:'center', padding:'20px 0 20px 20px',backgroundColor:'#237a57'}}>
      <Tooltip title="Fermer">
      <IconButton aria-label="close" style={{color:'white'}} onClick={onClose}>
        <CloseIcon />
      </IconButton>
       </Tooltip>            
      <Typography  variant={"h4"} style={{paddingLeft:15,color:'white'}}> Devis de la mission</Typography>
                   

      </div>
      
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
         setFieldValue
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} >
                
                
               
                <div style={{flex:1}}>
                <InputFeilds 
                  label={"Fourchette de prix"} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prix}
                  id='prix'
                  
                 
                  />
                  <div style={{color:'red',fontSize:15}}>
                  {errors.prix && touched.prix && errors.prix}
                  </div>
                </div>

                  <Space space={20} />
               
                   <RowBox>
                  {/* <div style={{flex:1}}>
                    
                  </div> */}
                   <div style={{flex:1,marginRight:10}}>
                  <DatePickers
                  id='datedeb'
                  label={"Date Debut"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.datedeb}
                  />
                  <div style={{color:'red',fontSize:15}}>
                  {errors.datedeb && touched.datedeb && errors.datedeb}
                  </div>
                  </div>
                  <div style={{flex:1}}>
                  <DatePickers
                  id='datefin'
                  label={"Date Fin"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.datefin}
                  />
                   <div style={{color:'red',fontSize:15}}>
                  {errors.datefin && touched.datefin && errors.datefin}
                  </div>
                  </div>
                  </RowBox> 

                  <Field name="confirmdate">
                    {({ field, meta }) => (
                        <RadioGroup {...field}>
                        <FormControlLabel
                            value="option1"
                            control={<Radio  style={{color:'#237a57'}}/>}
                            label="Je Confirme la date de debut"
                            style={{color:'black'}}
                        />
                    
                        </RadioGroup>
                    )}
                </Field>
                    {touched.confirmdate && errors.confirmdate ? (
                    <div style={{color:'red',fontSize:15}}>{errors.confirmdate}</div>
                    ) : null}
                  
                <Space space={20} />

                <div style={{float:'right'}}>
                <Button variant="contained" 
                  endIcon={<SendIcon />} 
                  size='medium' 
                  style={{backgroundColor:'#237a57'}}
                  type="submit" 
                  disabled={isSubmitting}
                  sx={{marginRight:2}}
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