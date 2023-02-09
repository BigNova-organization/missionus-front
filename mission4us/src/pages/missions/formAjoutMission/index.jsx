import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Body from "../../../components/Body";
import { Formik } from "formik";
import InputFeilds from "../../../components/outils/InputFeilds";
import Space from "../../../components/outils/Space";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import RowBox from "../../../components/RowBox";
import CustomSelect from "../../../components/CustomSelect";
import DatePickers from "../../../components/datePicker";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { MenuItem } from "@material-ui/core";

const options = [
  { value: "client1", label: "Reda Bekka" },
  { value: "client2", label: "Samia Kh" },
];

const optionsJob = [
  { value: "job1", label: "Plombier" },
  { value: "job2", label: "Ingenieur en dev" },
];
const AddMission = ({ open, onClose }) => {
  const initialValues = {
    intitule: "",
    details: "",
    client: "",
    tel: "",
    email: "",
    adresse: "",
    job: "",
    datedeb: "",
    datefin: "",
    prix: "",
    langues: "",
  };

  const validationSchema = Yup.object().shape({
    intitule: Yup.string().required("Intitulé est obligatoire"),
    client: Yup.string().required("Client est obligatoire"),
    tel: Yup.string().required("Téléphone est obligatoire"),
    email: Yup.mixed().required("Email est obligatoire"),
    adresse: Yup.string().required("Adresse est obligatoire"),
    job: Yup.string().required("Job est obligatoire"),
    datedeb: Yup.date().required("Date début est obligatoire"),
    datefin: Yup.date(),
    prix: Yup.number("Prix"),
    langues: Yup.string(),
    details: Yup.string()
      .min(10, "Détails doit contenir au min 10 caracteres")
      .max(150, "Détails doit contenir au max 150 caracteres"),
  });
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px 0 20px 20px",
          backgroundColor: "#237a57",
        }}
      >
        <Tooltip title="Fermer">
          <IconButton
            aria-label="close"
            style={{ color: "white" }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
        <Typography variant={"h4"} style={{ paddingLeft: 15 }}>
          Ajouter une mission{" "}
        </Typography>
      </div>

      <Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values, "myvalues");
            setTimeout(() => {
              console.log(values, "myvalues");
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
            <form onSubmit={handleSubmit}>
              <div style={{ flex: 1 }}>
                <InputFeilds
                  label={"Intitulé"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.intitule}
                  id="intitule"
                />
                <div style={{ color: "red", fontSize: 15 }}>
                  {errors.intitule && touched.intitule && errors.intitule}
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <CustomSelect
                  id={"client"}
                  name={"client"}
                  onChange={handleChange}
                  value={values.client}
                >
                  <MenuItem value="" disabled>
                    Selectionner un client
                  </MenuItem>
                  {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomSelect>

                <div style={{ color: "red", fontSize: 15 }}>
                  {errors.client && touched.client && errors.client}
                </div>
              </div>
              <RowBox>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <InputFeilds
                    label={"N° téléphone "}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tel}
                    id="tel"
                  />
                  <div style={{ color: "red", fontSize: 15 }}>
                    {errors.tel && touched.tel && errors.tel}
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <InputFeilds
                    label={"Email"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    id="email"
                  />
                  <div style={{ color: "red", fontSize: 15 }}>
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
              </RowBox>
              <RowBox>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <InputFeilds
                    label={"Adresse"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.adresse}
                    id="adresse"
                  />
                  <div style={{ color: "red", fontSize: 15 }}>
                    {errors.adresse && touched.adresse && errors.adresse}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <InputFeilds
                    label={"Fourchette de prix"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.prix}
                    id="prix"
                  />
                  <div style={{ color: "red", fontSize: 15 }}>
                    {errors.prix && touched.prix && errors.prix}
                  </div>
                </div>
              </RowBox>

              <CustomSelect
                id={"job"}
                name={"job"}
                onChange={handleChange}
                value={values.job}
              >
                <MenuItem value="" disabled>
                  Selectionner un job
                </MenuItem>
                {optionsJob.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </CustomSelect>

              <div style={{ color: "red", fontSize: 15 }}>
                {errors.job && touched.job && errors.job}
              </div>

              <Space space={20} />

              <RowBox>
                {/* <div style={{flex:1}}>
                    
                  </div> */}
                <div style={{ flex: 1, marginRight: 10 }}>
                  <DatePickers
                    id="datedeb"
                    label={"Date Debut"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.datedeb}
                  />
                  <div style={{ color: "red", fontSize: 15 }}>
                    {errors.datedeb && touched.datedeb && errors.datedeb}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <DatePickers
                    id="datefin"
                    label={"Date Fin"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.datefin}
                  />
                </div>
              </RowBox>

              <InputFeilds
                label={"Détails"}
                multiline={true}
                rows={3}
                id="details"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.details}
              />
              <div style={{ color: "red", fontSize: 15 }}>
                {errors.details && touched.details && errors.details}
              </div>

              <Space space={20} />

              <div style={{ float: "right" }}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  size="medium"
                  style={{ backgroundColor: "#237a57" }}
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
            </form>
          )}
        </Formik>
      </Body>
    </Box>
  );
};

export default AddMission;
