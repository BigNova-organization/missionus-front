import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { fr } from "yup-locales";
import useStyles from "../styles";

export function UseHooks() {
  const initialState = {
    // nom: "",
    // prenom: "",
    // sexe: "",
    // situation: "",
    // phone: "",
    // email: "",
    // date: "",
    // adresse: "",
    // apropos: "",
    // langue: "",
    // permis: "",
    // experience: "",
    // formation: "",
    // competence: "",
    // loisir: "",
    // reseaux: "",
    nom: "nompmz",
    prenom: "prenom",
    sexe: "sexe",
    situation: "situation",
    phone: "09390299220",
    email: "zinou@gmail.com",
    date: "09/09/1998",
    adresse: "algeria",
    apropos: "oao ppalso plsk papsk",
    langue: "Français",
    permis: "B",
    experience: "",
    formation: "",
    competence: "",
    loisir: "",
    reseaux: "",
    profile:''
  };
  const emailPhoneRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;

  const navigate = useNavigate();
  const OnSubmit = async (data) => {
    // navigate("VisualiserCv",{data});
    // console.log("ddd", data);
    // await dispatch({ type: "LOGIN", payload: data });
    navigate("VisualiserCv", { state: data });
    // console.log('data', data)
  };

  let validationSchema = Yup.object().shape({
    nom: Yup.string()
      .min(6, "Le nom est trop court - doit être de 6 caractères minimum.")
      .max(50, "Le nom est trop long - doit être de 50 caractères maximum.")
      .required("nom est requis"),
    prenom: Yup.string()
      .min(6, "Le prenom est trop court - doit être de 6 caractères minimum.")
      .max(50, "Le prenom est trop long - doit être de 50 caractères maximum.")
      .required("prenom est requis"),
    sexe: Yup.string().required("sexe est requis"),
    situation: Yup.string().required("situation est requis"),
    phone: Yup.number()
      .min(10, "Le phone est trop court - doit être de 10 number minimum.")
      .required("phone est requis"),
    email: Yup.string()
      .matches(emailPhoneRegex, "Doit être un email valide !")
      .required("email est requis"),
    date: Yup.string().required("la date est requis"),
    adresse: Yup.string()
      .min(6, "L'adresse est trop court - doit être de 6 caractères minimum.")
      .max(
        200,
        "L'adresse est trop long - doit être de 200 caractères maximum."
      )
      .required("L'adresse est requis"),
    apropos: Yup.string()
      .min(6, "a propos est trop court - doit être de 6 caractères minimum.")
      .max(200, "a propos est trop long - doit être de 200 caractères maximum.")
      .required("a propos est requis"),
    langue: Yup.string().required("la langue est requis"),
    permis: Yup.string().required("le permis est requis"),
    experience: Yup.string().required("l'experience est requis"),
    formation: Yup.string().required("formation est requis"),
    competence: Yup.string().required("competence est requis"),
    loisirs: Yup.string(),
    reseaux: Yup.string().required("réseaux sociaux est requis"),
    profile:Yup.string().required("profile image est requis"),
    presentation:Yup.string().required("presentation est requis"),
    
  });
  const classes = useStyles();

  const [authUser, setAuthUser] = useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    // console.log(`value`, value)
    setAuthUser({ ...authUser, [name]: value });

    console.log("authUser", authUser);
  };

  const initialStateExperience = {
    nomEntreprise: "",
    lieux: "",
    experienceDate: "",
    dateDebut: "",
    description:''
  };

  let validationSchemaExperince = Yup.object().shape({
    nomEntreprise: Yup.string().required("nom entreprise est requis"),
    lieux: Yup.string().required("lieux est requis"),
    experienceDate: Yup.string().required("experienced date est requis"),
    dateDebut: Yup.string().required("date debut est requis"),
    description: Yup.string().required("description est requis"),
  });


  const initialStateFormation = {
    debut: "",
    fin: "",
    title: "",
    lieux: "",
  };

  let validationSchemaFormation = Yup.object().shape({
    debut: Yup.string().required("date est requis"),
    lieux: Yup.string().required("lieux est requis"),
    title: Yup.string().required("formation est requis"),
    fin: Yup.string().required("date fin est requis"),
  });


  const initialStateCompetence= {
    competence: "",
    description: "",
 
  };

  let validationSchemaCompetence = Yup.object().shape({
    competence: Yup.string().required("competence est requis"),
    description: Yup.string().required("description est requis"),
 
  });


  const initialStateHobbies = {
    hobbies: "",
  };

  let validationSchemaHobbies = Yup.object().shape({
    hobbies: Yup.string().required("hobbies est requis"),
 
  });

  const initialStateResSx = {
    reseaux: "",
  };

  let validationSchemaResSx = Yup.object().shape({
    reseaux: Yup.string().required("hobbies est requis"),
 
  });

  return {
    initialState,
    validationSchema,
    OnSubmit,
    classes,
    handleChangeInput,
    validationSchemaExperince,
    initialStateExperience,
    initialStateFormation,
    validationSchemaFormation,
    initialStateCompetence,
    validationSchemaCompetence,
    initialStateHobbies,
    validationSchemaHobbies,
    initialStateResSx,
    validationSchemaResSx
  };
}
