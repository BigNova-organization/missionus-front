
import React, { useState } from 'react'
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
import RowBox from '../../../components/RowBox';
import CustomSelect from '../../../components/CustomSelect';
import DatePickers from '../../../components/datePicker';
// import "./styles.css";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from "@material-ui/core/IconButton";
import {MenuItem } from "@material-ui/core"
import SelectMenue from '../../../components/outils/SelectMenue';

// const options = [
//   // { value: '', label: '' },
//   { value: 'user1', label: 'Fournisseur' },
//   { value: 'user2', label: 'Client' },
// ]
const options = [
  // { value: '', label: '' },
  { value: 'user1', name: 'Fournisseur' },
  { value: 'user2', name: 'Client' },
]

const optionsJob = [
  // { value: '', label: '' },
  { value: 'job1', label: 'Plombier' },
  { value: 'job2', label: 'Ingenieur en dev' },
]
const AddUser = ({open,onClose}) => {
  const theme = useTheme();
 
  const initialValues={
    nom:'',
    user:'',
    tel:'',
    email:'',
    adresse:'',
    compte:'',
    registre:'',
    nis:'',
    nif:''
    
  }

  const validationSchema=Yup.object().shape({
    nom: Yup.string()
      .required('Nom est obligatoire'),
    user: Yup.string()
      .required('Utilisateur est obligatoire'),
    tel: Yup.string()
      .required('Téléphone est obligatoire'),
    email: Yup.mixed()
      .required('Email est obligatoire'),
    adresse: Yup.string()
      .required('Adresse est obligatoire'),
    compte: Yup.string(),
    registre: Yup.string()
        .required('Registre de commerce est obligatoire'),

    nis: Yup.string()
    .required('NIS est obligatoire'),
    nif: Yup.string()
    .required('NIF est obligatoire'),
   })

   const [isSelected,setIsSelected]=useState(false)
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
       
      }}
    >
      <div style={{display:'flex', alignItems:'center', padding:'20px 0 20px 20px',backgroundColor:'#237a57'}}>
      <Tooltip title="Fermer">
      <IconButton aria-label="close" style={{color:'white'}} onClick={onClose}>
        <CloseIcon />
      </IconButton>
       </Tooltip>            
      <Typography  variant={"h4"} style={{paddingLeft:15}}> Ajouter un utilisateur {" "}</Typography>
                   

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
         setFieldValue
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} >
                   
                {/* <div style={{flex:1}}>
                <CustomSelect
                  id={"user"}
                  name={"user"}
                  onChange={handleChange}
                  value={values.user}
                  
                  >
                  <MenuItem value="" disabled>
                    Selectionner un utilisateur
                  </MenuItem>
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
               
                  <div style={{color:'red',fontSize:12,float:'left'}}>
                  {errors.user && touched.user && errors.user}
                  </div>
               </div> */}
                     <SelectMenue
                    selectionTitle=" Selectionner un utilisateur *"
                    data={options}
                    handleOpen={(val) => {
                      setFieldValue("langue", val);
                    }}
                    error={errors.user && touched.user}
                    helperText={
                      errors.permis && touched.user ? errors.user : ""
                    }
                    value={values.user}
                    onBlur={() => {
                      setFieldTouched("permis", true);
                    }}
                    
                  />

                  <RowBox>
                <div style={{flex:1,marginRight:10}}>
                <InputFeilds 
                  label={"Nom complet"} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nom}
                  id='nom'
               
                  />
                  <div style={{color:'red',fontSize:12}}>
                  {errors.nom && touched.nom && errors.nom}
                  </div>
                </div>
               
                <div style={{flex:1}}>
                <InputFeilds 
                  label={"Compte bancaire"} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.compte}
                  id='compte'
                 
                  />
                  <div style={{color:'red',fontSize:12}}>
                  {errors.compte && touched.compte && errors.compte}
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
                  <div style={{color:'red',fontSize:12}}>
                  {errors.tel && touched.tel && errors.tel}
                  </div>
                </div>
               
                <div style={{flex:1}}>
                <InputFeilds 
                  label={"Adresse"} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.adresse}
                  id='adresse'
                 
                  />
                  <div style={{color:'red',fontSize:12}}>
                  {errors.adresse && touched.adresse && errors.adresse}
                  </div>
                </div>
                  
                </RowBox>
                 {values.user==='user1' &&(
                    <>
                     <div style={{flex:1}}>
                    <InputFeilds 
                      label={"Registre de commecre"} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.registre}
                      id='registre'
                     
                      />
                      <div style={{color:'red',fontSize:12}}>
                      {errors.registre && touched.registre && errors.registre}
                      </div>
                    </div>
                    <RowBox>
                    <div style={{flex:1,marginRight:10}}>
                    <InputFeilds 
                      label={"NIS"} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nis}
                      id='nis'
                     
                      />
                      <div style={{color:'red',fontSize:12}}>
                      {errors.nis && touched.nis && errors.nis}
                      </div>
                    </div>

                    <div style={{flex:1,}}>
                    <InputFeilds 
                      label={"NIF"} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nif}
                      id='nif'
                     
                      />
                      <div style={{color:'red',fontSize:12}}>
                      {errors.nif && touched.nif && errors.nif}
                      </div>
                    </div>
                    </RowBox>
                    </>
                   
                 )
                 }
                
                
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

export default AddUser