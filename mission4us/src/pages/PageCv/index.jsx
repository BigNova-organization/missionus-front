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
import { listLangue, listPermis } from "../../data/listLanguages";
import ChipsArray from "../../components/Add-card";
import {
  CloseModal,
  createCompetences,
  createExperiences,
  createFomations,
  createLoisirs,
  createRsociaux,
  handleModelopenExp,
  handleModelopenForm,
  TypeModel,
} from "../../Redux/createCv/slice";
import { Person, VerifiedUser } from "@material-ui/icons";
import { Person2Outlined } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { PrimaryText } from "../../components/utils/typography";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PageCv = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { OnSubmit, initialState, validationSchema, handleChangeInput } =
    UseHooks();

  const [value, setvalue] = useState(null);
  const classes = useStyles();

  const handleFileSelection = (event) => {
    setFile(event.target.files[0]);
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
  const { TypeM } = useSelector((state) => state.cvs);

  const { openExp, openForm } = useSelector((state) => state.cvs);

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

                    <Badge overlap="circular">{circle}</Badge>

                    <InputBase
                      id="standard-basic"
                      placeholder={"placeholder"}
                      value={value}
                      onChange={handleFileSelection}
                      sx={{
                        pl: "10px",
                        height: 40,
                        color: "#000",
                        width: "20%",
                      }}
                      type="file"
                    />
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
                  <InputFeilds
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
                  />
                  <InputFeilds
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
                  />
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
                    label={"A propos de moi"}
                    multiline={true}
                    rows={4}
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
                      errors.permis && touched.langue ? errors.langue : ""
                    }
                    value={langue}
                    onBlur={() => {
                      setFieldTouched("permis", true);
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
                    // titleModel={"Ajouter une expérience"}
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
                  />
                </Stack>

                <Space space={10} />

                {/* <Stack
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
                    titleModel={"Ajouter une expérience"}
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
                  />
                  <Space />

                  <ChipsArray
                    title={"loisirs "}
                    sousTitre={"Aucun loisirs"}
                    addToCv={createLoisirs}
                    titleModel={"Ajouter un loisirs"}
                    setFieldValue={setFieldValue}
                    name={"loisirs"}
                  />
                </Stack>

                <Space space={10} />

                <ChipsArray
                  title={"Réseaux sociaux *"}
                  sousTitre={"Réseaux sociaux non disponible"}
                  addToCv={createRsociaux}
                  titleModel={"Ajouter un réseaux sociaux"}
                  error={errors.reseaux && touched.reseaux}
                  helperText={
                    errors.reseaux && touched.reseaux ? errors.reseaux : ""
                  }
                  onBlur={() => {
                    setFieldTouched("reseaux", true);
                  }}
                  setFieldValue={setFieldValue}
                  name={"reseaux"}
                /> */}
                <Space space={30} />

                <Stack direction={"column"} spacing={3}>
                  <PrimaryText
                    fontWeight={"600"}
                    fontSize={"25px"}
                    text={"ajouter la vedio  "}
                    color={theme.palette.secondary.light}
                    cursor
                  />
                  <InputBase
                    id="standard-basic"
                    placeholder={"placeholder"}
                    value={value}
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
  const { validationSchemaExperince, initialStateExperience } = UseHooks();
  const theme = useTheme();

  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={initialStateExperience}
        validationSchema={validationSchemaExperince}
        onSubmit={(values, formikAction) => {
          // OnSubmit(values);
          console.log("values", values);
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
          const { nomEntreprise, lieux, experienceDate, dateDebut } = values;

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
                  value={experienceDate}
                  label={"Ajouter une experience date"}
                  margin
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
                />
                <InputFeilds
                  label={"Ajouter une date debut"}
                  value={dateDebut}
                  margin
                  onChange={handleChange}
                  error={errors.dateDebut && touched.dateDebut}
                  helperText={
                    errors.dateDebut && touched.dateDebut
                      ? errors.dateDebut
                      : ""
                  }
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"dateDebut"}
                  onBlur={() => {
                    setFieldTouched("dateDebut", true);
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
    </>
  );
};

const Experiences = () => {
  const { validationSchemaExperince, initialStateExperience } = UseHooks();
  const theme = useTheme();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialStateExperience}
      validationSchema={validationSchemaExperince}
      onSubmit={(values, formikAction) => {
        // OnSubmit(values);
        console.log("values", values);
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
        const { nomEntreprise, lieux, experienceDate, dateDebut } = values;

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
                value={nomEntreprise}
                label={"Ajouter une expérience"}
                margin
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
                margin
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
                value={experienceDate}
                label={"Ajouter une experience date"}
                margin
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
              />
              <InputFeilds
                label={"Ajouter une date debut"}
                value={dateDebut}
                margin
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
  return <></>;
};

const Loasirs = () => {
  return <></>;
};

const ReseauxSc = () => {
  return <></>;
};

const ModalToShow = () => {
  const { TypeM } = useSelector((state) => state.cvs);

  if (TypeM) {
    return Formations;
  }
};
