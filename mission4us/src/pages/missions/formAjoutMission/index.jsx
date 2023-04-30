import React, { useState } from "react";
import { Box, InputLabel, Select, Typography, useTheme } from "@mui/material";
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
import SelectMenue from "../../../components/outils/SelectMenue";
import Flags from "react-flags-select";
import ReactFlagsSelect from "react-flags-select";
// const options = [
//   { value: "client1", label: "Reda Bekka" },
//   { value: "client2", label: "Samia Kh" },
// ];
const options = [
  { value: "client1", name: "Reda Bekka" },
  { value: "client2", name: "Samia Kh" },
];

const optionsJob = [
  { value: "job1", name: "Plombier" },
  { value: "job2", name: "Ingenieur en dev" },
];

const langues = [
  { value: "fr", name: "Francais" },
  { value: "en", name: "Anglais" },
  { value: "es", name: "Espagnol" },
  { value: "de", name: "Allemagne" },
  { value: "it", name: "Italy" },
];
const AddMission = ({ open, onClose }) => {
  const theme = useTheme();
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
    langues: [],
  };
  const [selected, setSelected] = useState("");

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
    langues: Yup.string()
      .required("Langues est obligatoire")
      .min("Selectionez au minimum une langue"),
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
          backgroundColor: theme.palette.background.default,
          color: theme.palette.primary.light,
        }}
      >
        <Tooltip title="Fermer">
          <IconButton
            aria-label="close"
            style={{ color: theme.palette.primary.light }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
        <Typography variant={"h4"} style={{ paddingLeft: 15 }}>
          {" "}
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
            }, 1000);
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
            setFieldTouched,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div style={{ marginRight: 20 }}>
                <InputFeilds
                  label={"Intitulé"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.intitule}
                  id="intitule"
                  required={true}
                  error={errors.intitule && touched.intitule}
                  helperText={
                    errors.intitule && touched.intitule ? errors.intitule : ""
                  }
                />
              </div>

              {/* <div style={{ flex: 1 }}>
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
              </div> */}
              <SelectMenue
                selectionTitle="  Selectionner un client *"
                data={options}
                handleOpen={(val) => {
                  setFieldValue("client", val);
                }}
                error={errors.client && touched.client && errors.client}
                helperText={
                  errors.client && touched.client ? errors.client : ""
                }
                value={values.client}
                onBlur={() => {
                  setFieldTouched("client", true);
                }}
                marginRight
              />
              {/* <SelectMenue
                    selectionTitle="  Selectionner les langues *"
                    data={langues}
                    handleOpen={(val) => {
                      setFieldValue("langues", val);
                    }}
                    error={errors.langues && touched.langues && errors.langues}
                    helperText={
                      errors.langues && touched.langues ? errors.langues : ""
                    }
                    value={values.langues}
                    onBlur={() => {
                      setFieldTouched("langues", true);
                    }}
                    multiple={true}
                    marginRight
                  /> */}

              {/* <InputLabel id="languages-label">Languages</InputLabel>
                <Select
                  labelId="languages-label"
                  id="languages-select"
                  multiple
                  fullWidth
                  value={values.langues}
                  onChange={(event) => setFieldValue('languages', event.target.value)}
                  renderValue={(selected) => (
                    <div>
                      {selected.map((langues) => (
                        <Flags key={langues} className="flag" countryCode={langues} />
                      ))}
                    </div>
                  )}
                >
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                  <MenuItem value="de">German</MenuItem>
                  <MenuItem value="it">Italian</MenuItem>
                </Select>


                <ReactFlagsSelect
                countries={["US", "GB", "FR", "DE", "IT"]}
                customLabels={{ US: "EN-US", GB: "EN-GB", FR: "FR", DE: "DE", IT: "IT" }}
                placeholder="Select Language"
                selected={selected}
                  onSelect={(code) => setSelected(code)}
              /> */}
              <RowBox>
                <InputFeilds
                  label={"N° téléphone "}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tel}
                  id="tel"
                  required={true}
                  error={errors.tel && touched.tel}
                  helperText={errors.tel && touched.tel ? errors.tel : ""}
                />

                <InputFeilds
                  label={"Email"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  id="email"
                  required={true}
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email ? errors.email : ""}
                />
              </RowBox>
              <RowBox>
                <InputFeilds
                  label={"Adresse"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.adresse}
                  id="adresse"
                  required={true}
                  error={errors.adresse && touched.adresse}
                  helperText={
                    errors.adresse && touched.adresse ? errors.adresse : ""
                  }
                />

                <InputFeilds
                  label={"Fourchette de prix"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prix}
                  id="prix"
                  error={errors.adresse && touched.adresse}
                  helperText={
                    errors.adresse && touched.adresse ? errors.adresse : ""
                  }
                />
              </RowBox>
              {/* 
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
              </div> */}
              <SelectMenue
                selectionTitle="  Selectionner un job *"
                data={optionsJob}
                handleOpen={(val) => {
                  setFieldValue("job", val);
                }}
                error={errors.job && touched.job && errors.job}
                helperText={errors.job && touched.job ? errors.job : ""}
                value={values.job}
                onBlur={() => {
                  setFieldTouched("job", true);
                }}
                marginRight
              />

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
                    errors.datefin && touched.datefin ? errors.datefin : ""
                  }
                />
              </RowBox>

              {/* <InputFeilds
                label={"Détails"}
                multiline={true}
                rows={3}
                id="details"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.details}
                error={errors.details && touched.details}
                helperText={errors.details && touched.details ? errors.details : ""}
                marginRight
              /> */}
              <div style={{ marginRight: 20 }}>
                <InputFeilds
                  label={"Détails"}
                  multiline={true}
                  rows={4}
                  id="details"
                  error={errors.details && touched.details}
                  helperText={
                    errors.details && touched.details ? errors.details : ""
                  }
                  value={values.details}
                  onChange={handleChange}
                  autoFocus={true}
                  name={"details"}
                  onBlur={() => {
                    setFieldTouched("details", true);
                  }}
                />
              </div>

              <Space space={20} />

              <div style={{ float: "right" }}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  size="medium"
                  style={{
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.background.default,
                  }}
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
              <Space space={20} />
            </form>
          )}
        </Formik>
      </Body>
    </Box>
  );
};

export default AddMission;
