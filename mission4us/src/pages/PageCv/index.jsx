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
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import Head from "../../components/Head";
import Body from "../../components/Body";
import { Formik } from "formik";
import { UseHooks } from "./Hooks";
import InputFeilds from "../../components/outils/InputFeilds";
import Space from "../../components/outils/Space";
import RowBox from "../../components/RowBox";
import SelectMenue from "../../components/outils/SelectMenue";
import useStyles from "./styles";
import { listLangue, listPermis, listSexe, listSituation } from "../../data/listLanguages";
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

  return (
    <Box>
      <Head title="Page Cv" />
      <Body>
        <PrimaryText
          fontWeight={"600"}
          fontSize={"35px"}
          text={" Créez votre cv"}
          color={theme.palette.secondary.light}
          cursor
        />

        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={(values, formikAction) => {
            OnSubmit(values);
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
              presentation
            } = values;

            return (
              <>
                <Space space={"20px"} />
                <Stack width={"100%"} spacing={3} display="flex">
                  <Stack direction={"column"} justifyContent="center">
                    <PrimaryText
                      fontWeight={"500"}
                      fontSize={"25px"}
                      text={"ajouter la photo du profile "}
                      color={theme.palette.secondary.light}
                      cursor
                    />
                    <Space space={"20px"} />

                    {imageUrl ? (
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
                    />
                    <FormHelperText
                      sx={{ color: theme.palette.error.main, pl: 3 }}
                    >
                      {errors.profile && touched.profile ? errors.profile : ""}
                    </FormHelperText>
                  </Stack>

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
                    helperText={
                      errors.sexe && touched.sexe ? errors.sexe : ""
                    }
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
                      errors.situation && touched.situation ? errors.situation : ""
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

                <RowBox>
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
                  <InputFeilds
                    label={"Date de naissance"}
                    error={errors.date && touched.date}
                    helperText={errors.date && touched.date ? errors.date : ""}
                    value={date}
                    onChange={handleChange}
                    autoFocus={true}
                    autoComplete="email"
                    required={true}
                    id={"outlined-controlled"}
                    name={"date"}
                    onBlur={() => {
                      setFieldTouched("date", true);
                    }}
                    type="date"
                    shrink={true}
                  />
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
                <RowBox>
                  <InputFeilds
                    label={"Presentation"}
                    multiline={true}
                    rows={4}
                    id="standard-multiline-static"
                    error={errors.presentation && touched.presentation}
                    helperText={
                      errors.presentation && touched.presentation ? errors.presentation : ""
                    }
                    value={presentation}
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    name={"presentation"}
                    onBlur={() => {
                      setFieldTouched("presentation", true);
                    }}
                   
                  />
                </RowBox>

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
                      const updatedFruits = experience.filter(
                        (fruit, i) => i !== chipToDelete.key - 1
                      );
                      dispatch(createExperiences(updatedFruits));
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
                      const updatedFruits = experience.filter(
                        (fruit, i) => i !== chipToDelete.key - 1
                      );
                      dispatch(createFomations(updatedFruits));
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
                      const updatedFruits = experience.filter(
                        (fruit, i) => i !== chipToDelete.key - 1
                      );
                      dispatch(createCompetences(updatedFruits));
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
                      const updatedFruits = experience.filter(
                        (fruit, i) => i !== chipToDelete.key - 1
                      );
                      dispatch(createLoisirs(updatedFruits));
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
                    const updatedFruits = experience.filter(
                      (fruit, i) => i !== chipToDelete.key - 1
                    );
                    dispatch(createRsociaux(updatedFruits));
                  }}
                />
                <Space space={30} />

                <Stack direction={"column"} spacing={3}>
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
                </Stack>
                <Stack
                  justifyContent="flex-end"
                  maxWidth="100%"
                  flexDirection="row"
                  p={3}
                >
                  <Button
                    variant="contained"
                    sx={{
                      p: 1,
                      mr: 2,
                      bgcolor: theme.palette.secondary.dark,
                      color: theme.palette.secondary.main,
                    }}
                    onClick={handleSubmit}
                  >
                    Visualiser
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      p: 1,
                      mr: 2,
                      bgcolor: theme.palette.secondary.main,
                      color: theme.palette.secondary.dark,
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

const Formations = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { fomations } = useSelector((state) => state.cvs);
  const { initialStateFormation, validationSchemaFormation } = UseHooks();
  return (
    <>
      <Formik
        initialValues={initialStateFormation}
        validationSchema={validationSchemaFormation}
        onSubmit={(values, formikAction) => {
          dispatch(
            createFomations([
              ...fomations,
              { key: fomations.length + 1, label: values },
            ])
          );
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
        }) => {
          const { lieux, title, fin, debut,nomFormation } = values;

          return (
            <>
              <>
                <PrimaryText
                  fontWeight={"500"}
                  fontSize={"25px"}
                  text={"Formations *"}
                  color={theme.palette.secondary.light}
                  cursor
                />
                <Space space={"20px"} />

                <InputFeilds
                  value={title}
                  label={"Ajouter un titre"}
                  // margin
                  onChange={handleChange}
                  error={errors.title && touched.title}
                  helperText={errors.title && touched.title ? errors.title : ""}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"title"}
                  onBlur={() => {
                    setFieldTouched("title", true);
                  }}
                />
                  <InputFeilds
                  label={"Ajouter Établissement d'enseignement"}
                  value={nomFormation}
                  // margin
                  onChange={handleChange}
                  error={errors.nomFormation && touched.nomFormation}
                  helperText={errors.nomFormation && touched.nomFormation ? errors.nomFormation : ""}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"nomFormation"}
                  onBlur={() => {
                    setFieldTouched("nomFormation", true);
                  }}
                />
                <InputFeilds
                  label={"Ajouter un lieux"}
                  value={lieux}
                  // margin
                  onChange={handleChange}
                  error={errors.lieux && touched.lieux}
                  helperText={errors.lieux && touched.lieux ? errors.lieux : ""}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"lieux"}
                  onBlur={() => {
                    setFieldTouched("lieux", true);
                  }}
                />
                <InputFeilds
                 label={"Ajouter une date debut"}
                  value={debut}
                  // margin
                  onChange={handleChange}
                  error={errors.debut && touched.debut}
                  helperText={errors.debut && touched.debut ? errors.debut : ""}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"debut"}
                  onBlur={() => {
                    setFieldTouched("debut", true);
                  }}
                  type="date"
                  shrink={true}

                />

                <InputFeilds
                  label={"Ajouter une date fin"}
                  value={fin}
                  // margin
                  onChange={handleChange}
                  error={errors.fin && touched.fin}
                  helperText={errors.fin && touched.fin ? errors.fin : ""}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"fin"}
                  onBlur={() => {
                    setFieldTouched("fin", true);
                  }}
                  type="date"
                  shrink={true}

                />

                <Space space={"15px"} />
              </>

              <Box component={"div"} style={{ paddingTop: 20, float: "right" }}>
                <Button
                  variant="contained"
                  size="medium"
                  color="error"
                  onClick={() => {
                    // dispatch(handleModel(false));
                    dispatch(CloseModal(false));
                  }}
                  sx={{ marginRight: 2 }}
                >
                  annuler
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Ajouter
                </Button>
              </Box>
            </>
          );
        }}
      </Formik>
    </>
  );
};

const Experiences = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { experience } = useSelector((state) => state.cvs);
  const { validationSchemaExperince, initialStateExperience } = UseHooks();

  return (
    <Formik
      initialValues={initialStateExperience}
      validationSchema={validationSchemaExperince}
      onSubmit={(values, formikAction) => {
        dispatch(
          createExperiences([
            ...experience,
            { key: experience.length + 1, label: values },
          ])
        );
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
      }) => {
        const { nomExperience,nomEntreprise, description, lieux, experienceDate, dateDebut } =
          values;

        return (
          <>
            <>
              <PrimaryText
                fontWeight={"500"}
                fontSize={"25px"}
                text={"Experiences Professionnelle *"}
                color={theme.palette.secondary.light}
                cursor
              />
              <Space space={"20px"} />

              <InputFeilds
                value={nomExperience}
                label={"Ajouter un titre d'expérience"}
                // margin
                onChange={handleChange}
                error={errors.nomExperience && touched.nomExperience}
                helperText={
                  errors.nomExperience && touched.nomExperience
                    ? errors.nomExperience
                    : ""
                }
                autoFocus={true}
                required={true}
                id={"outlined-controlled"}
                name={"nomExperience"}
                onBlur={() => {
                  setFieldTouched("nomExperience", true);
                }}
              />
              <InputFeilds
                value={nomEntreprise}
                label={"Ajouter le nom de l'entreprise"}
                // margin
                onChange={handleChange}
                error={errors.nomEntreprise && touched.nomEntreprise}
                helperText={
                  errors.nomEntreprise && touched.nomEntreprise
                    ? errors.nomEntreprise
                    : ""
                }
                autoFocus={true}
                required={true}
                id={"outlined-controlled"}
                name={"nomEntreprise"}
                onBlur={() => {
                  setFieldTouched("nomEntreprise", true);
                }}
              />
              <InputFeilds
                value={lieux}
                label={"Ajouter un lieux"}
                // margin
                onChange={handleChange}
                error={errors.lieux && touched.lieux}
                helperText={errors.lieux && touched.lieux ? errors.lieux : ""}
                autoFocus={true}
                required={true}
                id={"outlined-controlled"}
                name={"lieux"}
                onBlur={() => {
                  setFieldTouched("lieux", true);
                }}
              />

              <InputFeilds
                label={"Ajouter une date de debut"}
                value={dateDebut}
                // margin
                onChange={handleChange}
                error={errors.dateDebut && touched.dateDebut}
                helperText={
                  errors.dateDebut && touched.dateDebut ? errors.dateDebut : ""
                }
                autoFocus={true}
                required={true}
                id={"outlined-controlled"}
                name={"dateDebut"}
                onBlur={() => {
                  setFieldTouched("dateDebut", true);
                }}
                type="date"
                shrink={true}
              />

              <InputFeilds
                value={experienceDate}
                 label={"Ajouter date de fin "}
                // margin
                onChange={handleChange}
                error={errors.experienceDate && touched.experienceDate}
                helperText={
                  errors.experienceDate && touched.experienceDate
                    ? errors.experienceDate
                    : ""
                }
                autoFocus={true}
                required={true}
                id={"outlined-controlled"}
                name={"experienceDate"}
                onBlur={() => {
                  setFieldTouched("experienceDate", true);
                }}
                type="date"
                shrink={true}

              />
              <InputFeilds
                value={description}
                label={"Ajouter une description "}
                // margin
                onChange={handleChange}
                error={errors.description && touched.description}
                helperText={
                  errors.description && touched.description
                    ? errors.description
                    : ""
                }
                autoFocus={true}
                required={true}
                id={"outlined-controlled"}
                name={"description"}
                onBlur={() => {
                  setFieldTouched("description", true);
                }}
                rows={3}
                multiline={true}
              />
              <Space space={"15px"} />
            </>

            <Box component={"div"} style={{ paddingTop: 20, float: "right" }}>
              <Button
                variant="contained"
                size="medium"
                color="error"
                onClick={() => {
                  // dispatch(handleModel(false));
                  dispatch(CloseModal(false));
                }}
                sx={{ marginRight: 2 }}
              >
                annuler
              </Button>
              <Button
                variant="contained"
                size="medium"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Ajouter
              </Button>
            </Box>
          </>
        );
      }}
    </Formik>
  );
};

const Competences = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { competences } = useSelector((state) => state.cvs);
  const { initialStateCompetence, validationSchemaCompetence } = UseHooks();

  return (
    <Formik
      initialValues={initialStateCompetence}
      validationSchema={validationSchemaCompetence}
      onSubmit={(values, formikAction) => {
        dispatch(
          createCompetences([
            ...competences,
            { key: competences.length + 1, label: values },
          ])
        );
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
      }) => {
        const { competence, description } = values;

        return (
          <>
            <>
              <PrimaryText
                fontWeight={"500"}
                fontSize={"25px"}
                text={"Ajouter une Compétences"}
                color={theme.palette.secondary.light}
                cursor
              />
              <Space space={"20px"} />

              <InputFeilds
                value={competence}
                label={"Ajouter une compétence"}
                // margin
                onChange={handleChange}
                error={errors.competence && touched.competence}
                helperText={
                  errors.competence && touched.competence
                    ? errors.competence
                    : ""
                }
                autoFocus={true}
                required={true}
                id={"outlined-controlled"}
                name={"competence"}
                onBlur={() => {
                  setFieldTouched("competence", true);
                }}
              />
              <InputFeilds
                value={description}
                label={"Ajouter une description"}
                // margin
                onChange={handleChange}
                error={errors.description && touched.description}
                helperText={
                  errors.description && touched.description
                    ? errors.description
                    : ""
                }
                autoFocus={true}
                required={true}
                id={"outlined-controlled"}
                name={"description"}
                onBlur={() => {
                  setFieldTouched("description", true);
                }}
                rows={4}
                multiline={true}
              />

              <Space space={"15px"} />
            </>

            <Box component={"div"} style={{ paddingTop: 20, float: "right" }}>
              <Button
                variant="contained"
                size="medium"
                color="error"
                onClick={() => {
                  // dispatch(handleModel(false));
                  dispatch(CloseModal(false));
                }}
                sx={{ marginRight: 2 }}
              >
                annuler
              </Button>
              <Button
                variant="contained"
                size="medium"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Ajouter
              </Button>
            </Box>
          </>
        );
      }}
    </Formik>
  );
};

const Loisirs = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { loisirs } = useSelector((state) => state.cvs);
  const { initialStateHobbies, validationSchemaHobbies } = UseHooks();

  return (
    <Formik
      initialValues={initialStateHobbies}
      validationSchema={validationSchemaHobbies}
      onSubmit={(values, formikAction) => {
        dispatch(
          createLoisirs([
            ...loisirs,
            { key: loisirs.length + 1, label: values },
          ])
        );
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
      }) => {
        const { hobbies } = values;

        return (
          <>
            <>
              <PrimaryText
                fontWeight={"500"}
                fontSize={"25px"}
                text={"Ajouter un loisirs"}
                color={theme.palette.secondary.light}
                cursor
              />
              <Space space={"20px"} />

              <InputFeilds
                value={hobbies}
                label={"Ajouter "}
                // margin
                onChange={handleChange}
                error={errors.hobbies && touched.hobbies}
                helperText={
                  errors.hobbies && touched.hobbies ? errors.hobbies : ""
                }
                autoFocus={true}
                required={true}
                id={"outlined-controlled"}
                name={"hobbies"}
                onBlur={() => {
                  setFieldTouched("hobbies", true);
                }}
              />

              <Space space={"15px"} />
            </>

            <Box component={"div"} style={{ paddingTop: 20, float: "right" }}>
              <Button
                variant="contained"
                size="medium"
                color="error"
                onClick={() => {
                  // dispatch(handleModel(false));
                  dispatch(CloseModal(false));
                }}
                sx={{ marginRight: 2 }}
              >
                annuler
              </Button>
              <Button
                variant="contained"
                size="medium"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Ajouter
              </Button>
            </Box>
          </>
        );
      }}
    </Formik>
  );
};

const ReseauxSc = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { Rsociaux } = useSelector((state) => state.cvs);
  const { initialStateResSx, validationSchemaResSx } = UseHooks();

  return (
    <Formik
      initialValues={initialStateResSx}
      validationSchema={validationSchemaResSx}
      onSubmit={(values, formikAction) => {
        dispatch(
          createRsociaux([
            ...Rsociaux,
            { key: Rsociaux.length + 1, label: values },
          ])
        );
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
      }) => {
        const { reseaux } = values;

        return (
          <>
            <>
              <PrimaryText
                fontWeight={"500"}
                fontSize={"25px"}
                text={"Ajouter un réseaux sociaux"}
                color={theme.palette.secondary.light}
                cursor
              />
              <Space space={"20px"} />

              <InputFeilds
                value={reseaux}
                label={"Ajouter"}
                // margin
                onChange={handleChange}
                error={errors.reseaux && touched.reseaux}
                helperText={
                  errors.reseaux && touched.reseaux ? errors.reseaux : ""
                }
                autoFocus={true}
                required={true}
                id={"outlined-controlled"}
                name={"reseaux"}
                onBlur={() => {
                  setFieldTouched("reseaux", true);
                }}
              />

              <Space space={"15px"} />
            </>

            <Box component={"div"} style={{ paddingTop: 20, float: "right" }}>
              <Button
                variant="contained"
                size="medium"
                color="error"
                onClick={() => {
                  // dispatch(handleModel(false));
                  dispatch(CloseModal(false));
                }}
                sx={{ marginRight: 2 }}
              >
                annuler
              </Button>
              <Button
                variant="contained"
                size="medium"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Ajouter
              </Button>
            </Box>
          </>
        );
      }}
    </Formik>
  );
};
