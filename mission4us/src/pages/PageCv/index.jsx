import React, { useCallback, useEffect, useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputBase,
  InputLabel,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Head from "../../components/Head";
import Body from "../../components/Body";
import toast, { Toaster } from "react-hot-toast";
// import { Formik } from "formik";
import { UseHooks } from "./Hooks";
import InputFeilds from "../../components/outils/InputFeilds";
import Space from "../../components/outils/Space";
import RowBox from "../../components/RowBox";
import SelectMenue from "../../components/outils/SelectMenue";
import useStyles from "./styles";
import {
  listLangue,
  listPermis,
  listSexe,
  listSituation,
} from "../../data/listLanguages";
import ChipsArray from "../../components/Add-card";
import {
  CloseModal,
  createCompetences,
  createExperiences,
  createFomations,
  createLoisirs,
  createRsociaux,
  handleModelopenComp,
  handleModelopenExp,
  handleModelopenForm,
  handleModelopenLois,
  handleModeopenResx,
} from "../../Redux/createCv/slice";
import { Person2Outlined } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { PrimaryText } from "../../components/utils/typography";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import ReseauxSc from "./Components/ReseauxSc";
import Experiences from "./Components/Experiences";
import Formations from "./Components/Formations";
import Loisirs from "./Components/Loisirs";
import Competences from "./Components/Competences";
import { CreateCvApi } from "../../Redux/createCv/api/createCvSlice";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
// import { DatePicker, LocalizationProvider } from '@mui/lab';
import DatePikerProvider from "../../components/datePikerProvider";

// import { makeStyles } from '@mui/stykles';

// import { styled } from '@mui/system';

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DatePickers from "../../components/datePicker";

const PageCv = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { OnSubmit, initialState, validationSchema, handleChangeInput } =
    UseHooks();

  const [File, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const classes = useStyles();

  const handleFileSelection = (event, setFieldValue) => {
    // setFile(event.target.files[0]);
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    setFieldValue("profile", imageUrl);
  };

  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.grey[100]}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const shapeStyles = {
    bgcolor: theme.palette.background.default,
    width: 80,
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    ml: 1,
  };

  const {
    openExp,
    openForm,
    openComp,
    openLois,
    openResx,
    Rsociaux,
    fomations,
    loisirs,
    experience,
    competences,
  } = useSelector((state) => state.cvs);

  const shapeCircleStyles = { borderRadius: "50%" };
  const circle = (
    <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }}>
      <Person2Outlined
        sx={{ fontSize: 60, color: theme.palette.primary.dark }}
      />
    </Box>
  );

  const [submitButtonState, setSubmitButtonState] = useState(null);
  const handleSubmitButtonState = (isSubmit) => {
    setSubmitButtonState(isSubmit);
  };
  const notify = () => toast.success("CV créée avec succés");
  const onError = () => {};
  const onSuccesAction = () => {
    notify();
  };

  const onErrorAction = (message) => {
    toast.error("échec de la création du CV");
  };

  const StyledDatePicker = styled(DatePicker)(({}) => ({
    width: "100%",
    // color: theme.palette.primary.light,
    marginRight: 15,
    padding: "5px 1px 0px 0px",
    justifyContent: "center",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.light,
        color: theme.palette.primary.light,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.light,
        color: theme.palette.primary.light,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.light,
        color: theme.palette.primary.light,
      },
      "&.MuiFormControl-root": {
        color: theme.palette.primary.light,
      },
      "& .MuiInputBase-input": {
        color: theme.palette.primary.light,
      },
      "& .MuiSvgIcon-root": {
        color: theme.palette.primary.light,
      },
    },
  }));
 

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    
    return `${day}/${month}/${year}`;
  };

  return (
    <Box>
      <Head title="Page Cv" />
      {/* <ToastContainer /> */}
      <Body>
        <PrimaryText
          fontWeight={"600"}
          fontSize={"35px"}
          text={"Créez votre cv"}
          color={theme.palette.secondary.light}
          cursor
        />

        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            if (submitButtonState == "Valider") {
              // console.log("valider", values);
              // console.log("formation", values.formation);

              let exp = experience.map((i) => {
                return i.label;
              });
              let expe = competences.map((i) => {
                return i.label;
              });

              let iok = expe.map((i) => {
                return {
                  name: i.competence.toUpperCase(),
                  type: "SKILL",
                  description: i.description,
                  rating: 9,
                };
              });

              let iok2 = exp.map((i) => {
                return {
                  name: i.nomExperience.toUpperCase(),
                  type: "PROFESSIONNAL_EXPERIENCE",
                  startDate: "2023-05-09",
                  endDate: "2024-05-09",
                  location: i.lieux,
                  establishment: "ti",
                  description: i.description,
                };
              });

              let obj = {
                firstName: values.nom,
                lastName: values.prenom,
                // dateOfBirth: JSON.stringify(values.date) "2023-05-09",
                dateOfBirth: "2023-05-09",
                street: values.adresse,
                city: "Ginochester",
                country: "Iran",
                socialReason: "Intranet Cotton HTTP",
                phoneNumber: values.phone,
                email: values.email,
                languages: [
                  {
                    id: 5,
                  },
                ],
                jobs: [
                  {
                    id: 5,
                  },
                ],
                driverLicences: [
                  {
                    id: 1,
                  },
                  {
                    id: 2,
                  },
                ],
                skillAndHobbies: iok,

                experiences: iok2,
              };
              console.log("obj", obj);
              let object = {
                obj,
                onSuccesAction,
                onError,
                onErrorAction,
              };
              dispatch(CreateCvApi(object));
            } else {
              console.log("visiualizer", values);
              OnSubmit(values);
            }
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            touched,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
            setSubmitting,
          }) => {
            const {
              nom,
              prenom,
              sexe,
              situation,
              phone,
              email,
              date,
              adresse,
              apropos,
              langue,
              permis,
              presentation,
            } = values;
            return (
              <>
                <Space space={"20px"} />
                <Stack width={"100%"} spacing={3} display="flex">
                  {/* <Stack direction={"column"} justifyContent="center"> */}
                  {/* <PrimaryText
                      fontWeight={"500"}
                      fontSize={"25px"}
                      text={"ajouter la photo du profile "}
                      color={theme.palette.secondary.light}
                      cursor
                    />
                    <Space space={"20px"} /> */}

                  {/* {imageUrl ? (
                      <Box
                        component={"img"}
                        src={imageUrl}
                        width="220px"
                        height="150px"
                        sx={{
                          borderRadius: "10px",
                          border: `2px solid ${theme.palette.secondary.light}`,
                          mb: 1,
                        }}
                      />
                    ) : (
                      <Badge overlap="circular">{circle}</Badge>
                    )}
                    <InputBase
                      id="standard-basic"
                      placeholder={"placeholder"}
                      value={File}
                      onChange={(event) => {
                        // handleFileSelection(event,setFieldValue);
                        const file = event.target.files[0];
                        const imageUrl = URL.createObjectURL(file);
                        setImageUrl(imageUrl);
                        setFieldValue("profile", imageUrl);
                      }}
                      sx={{
                        pl: "10px",
                        height: 40,
                        color: "#000",
                        width: "20%",
                      }}
                      type="file"
                    /> */}
                  {/* <FormHelperText
                      sx={{ color: theme.palette.error.main, pl: 3 }}
                    >
                      {errors.profile && touched.profile ? errors.profile : ""}
                    </FormHelperText>
                  </Stack> */}

                  <RowBox>
                    <InputFeilds
                      label={"nom"}
                      error={errors.nom && touched.nom}
                      helperText={errors.nom && touched.nom ? errors.nom : ""}
                      value={nom}
                      onChange={handleChange}
                      autoFocus={true}
                      required={true}
                      id={"outlined-controlled"}
                      name={"nom"}
                      onBlur={() => {
                        setFieldTouched("nom", true);
                      }}
                    />
                    <InputFeilds
                      label={"prénom"}
                      error={errors.prenom && touched.prenom}
                      helperText={
                        errors.prenom && touched.prenom ? errors.prenom : ""
                      }
                      value={prenom}
                      onChange={handleChange}
                      autoFocus={true}
                      required={true}
                      id={"outlined-controlled"}
                      name={"prenom"}
                      onBlur={() => {
                        setFieldTouched("prenom", true);
                      }}
                    />
                  </RowBox>
                </Stack>

                <RowBox>
                  {/* <InputFeilds
                    label={"sexe"}
                    error={errors.sexe && touched.sexe}
                    helperText={errors.sexe && touched.sexe ? errors.sexe : ""}
                    value={sexe}
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    id={"outlined-controlled"}
                    name={"sexe"}
                    onBlur={() => {
                      setFieldTouched("sexe", true);
                    }}
                  /> */}
                  <SelectMenue
                    selectionTitle="Selectionner votre sexe*"
                    data={listSexe}
                    handleOpen={(val) => {
                      setFieldValue("sexe", val);
                    }}
                    error={errors.sexe && touched.sexe}
                    helperText={errors.sexe && touched.sexe ? errors.sexe : ""}
                    value={sexe}
                    onBlur={() => {
                      setFieldTouched("sexe", true);
                    }}
                    marginRight
                  />
                  <SelectMenue
                    selectionTitle="Selectionner votre situation*"
                    data={listSituation}
                    handleOpen={(val) => {
                      setFieldValue("situation", val);
                    }}
                    error={errors.situation && touched.situation}
                    helperText={
                      errors.situation && touched.situation
                        ? errors.situation
                        : ""
                    }
                    value={situation}
                    onBlur={() => {
                      setFieldTouched("situation", true);
                    }}
                    marginRight
                  />
                  {/* <InputFeilds
                    label={"marié"}
                    error={errors.situation && touched.situation}
                    helperText={
                      errors.situation && touched.situation
                        ? errors.situation
                        : ""
                    }
                    value={situation}
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    id={"outlined-controlled"}
                    name={"situation"}
                    onBlur={() => {
                      setFieldTouched("situation", true);
                    }}
                  /> */}
                </RowBox>

                <RowBox sx={{alignItems:"center"}}>
                  <InputFeilds
                    label={"Téléphone"}
                    error={errors.phone && touched.phone}
                    helperText={
                      errors.phone && touched.phone ? errors.phone : ""
                    }
                    value={phone}
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    id={"outlined-controlled"}
                    name={"phone"}
                    onBlur={() => {
                      setFieldTouched("phone", true);
                    }}
                  />
                  <InputFeilds
                    label={"E-mail"}
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? errors.email : ""
                    }
                    value={email}
                    onChange={handleChange}
                    autoFocus={true}
                    autoComplete="email"
                    required={true}
                    id={"outlined-controlled"}
                    name={"email"}
                    onBlur={() => {
                      setFieldTouched("email", true);
                    }}
                  />
                </RowBox>

                <RowBox>


                <DatePickers
                       label={"Date de naissance"}
                       error={errors.date && touched.date}
                       helperText={errors.date && touched.date ? errors.date : ""}
                       value={date}
                        // onChange={handleChange}
                       onChange={(date) => {
                        // setFieldValue("date",formatDate(date.toString()));
                        setFieldValue("date",date.toString());
                      }}
                       autoFocus={true}
                       required={true}
                       id={"outlined-controlled"}
                       name={"date"}
                       onBlur={() => {
                         setFieldTouched("date", true);
                       }}
                       type=""
                       shrink={true}
                       formatDate={formatDate}
                       setFieldValue={setFieldValue}

                />

                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StyledDatePicker
                      //
                      //  label={"Date de naissance"}
                      onChange={(date) => {
                        setFieldValue("date",formatDate(date.toString()));
                      }}
                      format="DD/MM/YYYY"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          className={classes.datePicker}
                          id="datepicker"
                      value={date}
                      error={errors.date && touched.date}
                      helperText={errors.date && touched.date ? errors.date : ""}
                      autoFocus={true}
                      required={true}
                    name={"date"}
                    onBlur={() => {
                      setFieldTouched("date", true);
                    }}
                        />
                      )}
                    shrink={true}

                    />
                  </LocalizationProvider> */}


                  {/* <InputFeilds
                    label={"Date de naissance"}
                    error={errors.date && touched.date}
                    helperText={errors.date && touched.date ? errors.date : ""}
                    value={date}
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    id={"outlined-controlled"}
                    name={"date"}
                    onBlur={() => {
                      setFieldTouched("date", true);
                    }}
                    type=""
                    shrink={true}
                    renderInput={(params) => <TextField {...params} />}
                  /> */}
                  <InputFeilds
                    label={"Adresse"}
                    error={errors.adresse && touched.adresse}
                    helperText={
                      errors.adresse && touched.adresse ? errors.adresse : ""
                    }
                    value={adresse}
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    id={"outlined-controlled"}
                    name={"adresse"}
                    onBlur={() => {
                      setFieldTouched("adresse", true);
                    }}
                  />
                </RowBox>

                <RowBox>
                  <InputFeilds
                    label={"Bio"}
                    multiline={true}
                    rows={2}
                    id="standard-multiline-static"
                    error={errors.apropos && touched.apropos}
                    helperText={
                      errors.apropos && touched.apropos ? errors.apropos : ""
                    }
                    value={apropos}
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    name={"apropos"}
                    onBlur={() => {
                      setFieldTouched("apropos", true);
                    }}
                  />
                </RowBox>
                {/* <RowBox> */}
                <InputFeilds
                  label={"Presentation"}
                  multiline={true}
                  rows={4}
                  id="standard-multiline-static"
                  error={errors.presentation && touched.presentation}
                  helperText={
                    errors.presentation && touched.presentation
                      ? errors.presentation
                      : ""
                  }
                  value={presentation}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  name={"presentation"}
                  onBlur={() => {
                    setFieldTouched("presentation", presentation);
                  }}
                />
                {/* </RowBox> */}

                <Space space={30} />

                <Box className={classes.containerSelect}>
                  <SelectMenue
                    selectionTitle="Selectionner une langue *"
                    data={listLangue}
                    handleOpen={(val) => {
                      setFieldValue("langue", val);
                    }}
                    error={errors.langue && touched.langue}
                    helperText={
                      errors.langue && touched.langue ? errors.langue : ""
                    }
                    value={langue}
                    onBlur={() => {
                      setFieldTouched("langue", true);
                    }}
                    marginRight
                  />
                  <SelectMenue
                    selectionTitle="Selectionner une catégorie *"
                    data={listPermis}
                    handleOpen={(val) => {
                      setFieldValue("permis", val);
                    }}
                    error={errors.permis && touched.permis}
                    helperText={
                      errors.permis && touched.permis ? errors.permis : ""
                    }
                    value={permis}
                    onBlur={() => {
                      setFieldTouched("permis", true);
                    }}
                    marginRight
                  />
                </Box>

                <Space space={30} />

                <Stack
                  flexDirection="row"
                  direction={{
                    xs: "column",
                    sm: "column",
                    lg: "row",
                    md: "column",
                  }}
                >
                  <ChipsArray
                    title={"Experiences Professionnelle *"}
                    sousTitre={"Aucune expérience professionnelle"}
                    addToCv={createExperiences}
                    error={errors.experience && touched.experience}
                    helperText={
                      errors.experience && touched.experience
                        ? errors.experience
                        : ""
                    }
                    onBlur={() => {
                      setFieldTouched("experience", true);
                    }}
                    setFieldValue={setFieldValue}
                    name={"experience"}
                    ModelComponent={Experiences}
                    handleClose={() => {
                      dispatch(handleModelopenExp(false));
                    }}
                    handleOpen={() => {
                      dispatch(handleModelopenExp(true));
                    }}
                    open={openExp}
                    chipData={experience}
                    handleDelete={(chipToDelete) => () => {

                      const newItems = experience.filter(
                        (item) => item.key !== chipToDelete.key
                      );
                      dispatch(createExperiences(newItems));
                    }}
                  />
                  <Space />

                  <ChipsArray
                    title={"Formations *"}
                    sousTitre={"Aucune Formation"}
                    addToCv={createFomations}
                    // titleModel={"Ajouter une Formation"}
                    error={errors.formation && touched.formation}
                    helperText={
                      errors.formation && touched.formation
                        ? errors.formation
                        : ""
                    }
                    onBlur={() => {
                      setFieldTouched("formation", true);
                    }}
                    setFieldValue={setFieldValue}
                    name={"formation"}
                    ModelComponent={Formations}
                    handleClose={() => {
                      dispatch(handleModelopenForm(false));
                    }}
                    handleOpen={() => {
                      dispatch(handleModelopenForm(true));
                    }}
                    open={openForm}
                    chipData={fomations}
                    handleDelete={(chipToDelete) => () => {
                      const updatedFruits = fomations.filter(
                        (fruit, i) => i !== chipToDelete.key - 1
                      );
                      const newItems = fomations.filter(
                        (item) => item.key !== chipToDelete.key
                      );

                      dispatch(createFomations(newItems));
                    }}
                  />
                </Stack>

                <Space space={10} />

                <Stack
                  flexDirection="row"
                  direction={{
                    xs: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                  }}
                >
                  <ChipsArray
                    title={"Compétences *"}
                    sousTitre={"Aucune Compétences"}
                    addToCv={createCompetences}
                    error={errors.competence && touched.competence}
                    helperText={
                      errors.competence && touched.competence
                        ? errors.competence
                        : ""
                    }
                    onBlur={() => {
                      setFieldTouched("competence", true);
                    }}
                    setFieldValue={setFieldValue}
                    name={"competence"}
                    ModelComponent={Competences}
                    handleClose={() => {
                      dispatch(handleModelopenComp(false));
                    }}
                    handleOpen={() => {
                      dispatch(handleModelopenComp(true));
                    }}
                    open={openComp}
                    chipData={competences}
                    handleDelete={(chipToDelete) => () => {
                      // const updatedFruits = experience.filter(
                      //   (fruit, i) => i !== chipToDelete.key - 1
                      // );
                      const newItems = competences.filter(
                        (item) => item.key !== chipToDelete.key
                      );

                      dispatch(createCompetences(newItems));
                    }}
                  />
                  <Space />

                  <ChipsArray
                    title={"loisirs "}
                    sousTitre={"Aucun loisirs"}
                    addToCv={createLoisirs}
                    setFieldValue={setFieldValue}
                    name={"loisirs"}
                    ModelComponent={Loisirs}
                    handleClose={() => {
                      dispatch(handleModelopenLois(false));
                    }}
                    handleOpen={() => {
                      dispatch(handleModelopenLois(true));
                    }}
                    open={openLois}
                    chipData={loisirs}
                    handleDelete={(chipToDelete) => () => {
                      // const updatedFruits = experience.filter(
                      //   (fruit, i) => i !== chipToDelete.key - 1
                      // );
                      const newItems = loisirs.filter(
                        (item) => item.key !== chipToDelete.key
                      );

                      dispatch(createLoisirs(newItems));
                    }}
                  />
                </Stack>

                <Space space={10} />

                <ChipsArray
                  title={"Réseaux sociaux *"}
                  sousTitre={"Réseaux sociaux non disponible"}
                  addToCv={createRsociaux}
                  error={errors.reseaux && touched.reseaux}
                  helperText={
                    errors.reseaux && touched.reseaux ? errors.reseaux : ""
                  }
                  onBlur={() => {
                    setFieldTouched("reseaux", true);
                  }}
                  setFieldValue={setFieldValue}
                  name={"reseaux"}
                  ModelComponent={ReseauxSc}
                  handleClose={() => {
                    dispatch(handleModeopenResx(false));
                  }}
                  handleOpen={() => {
                    dispatch(handleModeopenResx(true));
                  }}
                  open={openResx}
                  chipData={Rsociaux}
                  handleDelete={(chipToDelete) => () => {
                    // const updatedFruits = loisirs.filter(
                    //   (fruit, i) => i !== chipToDelete.key - 1
                    // );

                    const newItems = createRsociaux.filter(
                      (item) => item.key !== chipToDelete.key
                    );

                    dispatch(createRsociaux(newItems));
                  }}
                />
                <Space space={30} />

                {/* <Stack direction={"column"} spacing={3}>
                  <PrimaryText
                    fontWeight={"600"}
                    fontSize={"25px"}
                    text={"ajouter une video"}
                    color={theme.palette.secondary.light}
                    cursor
                  />
                  <InputBase
                    id="standard-basic"
                    placeholder={"placeholder"}
                    value={File}
                    onChange={handleFileSelection}
                    sx={{ pl: "0px", flex: 1, height: 40, color: "#000" }}
                    type="file"
                  />
                </Stack> */}

                <Stack
                  justifyContent="flex-end"
                  maxWidth="100%"
                  flexDirection="row"
                  p={3}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      p: 1,
                      mr: 2,
                      bgcolor: theme.palette.secondary.dark,
                      color: theme.palette.secondary.main,
                      "&:hover ": {
                        bgcolor: theme.palette.secondary.dark,
                        color: theme.palette.secondary.main,
                      },
                    }}
                    onClick={() => {
                      handleSubmitButtonState("skip");
                      handleSubmit();
                    }}
                  >
                    Visualiser
                  </Button>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      p: 1,
                      mr: 2,
                      bgcolor: theme.palette.secondary.main,
                      color: theme.palette.secondary.dark,
                      "&:hover ": {
                        bgcolor: theme.palette.secondary.main,
                        color: theme.palette.secondary.dark,
                      },
                    }}
                    onClick={() => {
                      handleSubmitButtonState("Valider");
                      handleSubmit();
                    }}
                  >
                    Valider
                  </Button>
                </Stack>
              </>
            );
          }}
        </Formik>
      </Body>
    </Box>
  );
};

export default PageCv;
