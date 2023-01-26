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
import MenuItem from '@mui/material/MenuItem';
import * as Yup from 'yup'
import RowBox from '../../../components/RowBox';
import CustomSelect from '../../../components/CustomSelect';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import './styles.css'

const options = [
  // { value: '', label: '' },
  { value: 'client1', label: 'Reda Bekka' },
  { value: 'client2', label: 'Samia Kh' },
 


]
const AddMission = ({open,onClose}) => {
  const theme = useTheme();
 
  const initialValues={
    intitule:'',
    details:'',
    client:'',
    tel:'',
    email:'',
    adresse:'',
    job:'',
    datedeb:'',
    datefin:'',
    prix:'',
    langues:''
    
  }

  const validationSchema=Yup.object().shape({
    intitule: Yup.string()
      .required('Intitulé est obligatoire'),
    client: Yup.string()
      .required('Client est obligatoire'),
    tel: Yup.string()
      .required('Téléphone est obligatoire'),
    email: Yup.mixed()
      .required('Email est obligatoire'),
    adresse: Yup.string()
      .required('Adresse est obligatoire'),
    job: Yup.string()
      .required('Job est obligatoire'),
    datedeb: Yup.date()
      .required('Date début est obligatoire'),
    datefin: Yup.date(),
    prix: Yup.number('Prix'),
    langues: Yup.string(),
    details: Yup.string()
    .min(10, 'Détails doit contenir au min 10 caracteres')
    .max(150, 'Détails doit contenir au max 150 caracteres')
      
   
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
      
      <Body sx={{ padding:10}}>
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
         <form onSubmit={handleSubmit} style={{ padding:10}}>
                
                
                <div style={{flex:1}}>
                <InputFeilds 
                  label={"Intitulé"} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.intitule}
                  id='intitule'
                 
                  />
                  <div style={{color:'red',fontSize:15}}>
                  {errors.intitule && touched.intitule && errors.intitule}
                  </div>
                </div>
                
                <RowBox >
                <div style={{flex:1,marginRight:10}}>
                <CustomSelect
                  // className='input'
                  onChange={value=>setFieldValue('client',value.value)}
                  value={values.client}
                  options={options}
                  // placeholder={'Choisissez votre client'}
                  
                  />
               
                  <div style={{color:'red',fontSize:15}}>
                  {errors.client && touched.client && errors.client}
                  </div>
                </div>

                <div style={{flex:1}}>
                <CustomSelect
                  // className='input'
                  onChange={value=>setFieldValue('job',value.value)}
                  value={values.job}
                  options={options}
                  // placeholder={'Choisissez votre client'}
                  
                  />
               
                  <div style={{color:'red',fontSize:15}}>
                  {errors.job && touched.job && errors.job}
                  </div>
                </div>
                
                
                </RowBox>
                <RowBox>
                <div style={{flex:1,marginRight:10}}>
                <InputFeilds 
                  label={"N° téléphone "} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tel}
                  id='tel'
               
                  />
                  <div style={{color:'red',fontSize:15}}>
                  {errors.tel && touched.tel && errors.tel}
                  </div>
                </div>
               
                <div style={{flex:1}}>
                <InputFeilds 
                  label={"Email"} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  id='email'
                 
                  />
                  <div style={{color:'red',fontSize:15}}>
                  {errors.email && touched.email && errors.email}
                  </div>
                </div>
                
                
                
                </RowBox>
               
                <RowBox>
                <div style={{flex:1,marginRight:10}}>
                <InputFeilds 
                  label={"Adresse"} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.adresse}
                  id='adresse'
                 
                  />
                  <div style={{color:'red',fontSize:15}}>
                  {errors.adresse && touched.adresse && errors.adresse}
                  </div>
                </div>
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

                </RowBox>
                  {/* <RowBox>
                  <div style={{flex:1}}>
                    
                  </div>
                  </RowBox> */}
                
                 
                
               
                
                  <InputFeilds
                    label={"Détails"}
                    multiline={true}
                    rows={3}
                    id="details"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.details}
                   
                  />
                    <div style={{color:'red',fontSize:15}}>
                  {errors.details && touched.details && errors.details}
                  </div>
                
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

export default AddMission