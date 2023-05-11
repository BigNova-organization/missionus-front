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
    nom: "nom",
    prenom: "prenom",
    sexe: "Male",
    situation: "Marié",
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
    profile: "",
    presentation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eligendi ex, distinctio consequuntur asperiores iure neque modi possimus eos temporibus eum pariatur qui ducimus, illum maiores. Minus consequatur ipsa quibusdam dolorem quos? Pariatur, optio qui. Temporibus ipsa eos deleniti rerum sed quam dolores cupiditate unde ut labore quas voluptate eaque, odit doloremque magni nihil adipisci! Inventore, commodi. Quia sint voluptatibus tenetur dolores beatae fugit minima quaerat quibusdam, facere harum neque eligendi facilis, a repudiandae, quis labore obcaecati? Rem expedita corporis numquam a perspiciatis maiores libero quas sint mollitia soluta. Cupiditate quia iste unde sapiente sunt praesentium in, esse exercitationem, suscipit nobis facilis.",
  };

  const emailPhoneRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;

  const navigate = useNavigate();
  const OnSubmit = async (data) => {
    navigate("VisualiserCv", { state: data });
  };

  let validationSchema = Yup.object().shape({
    nom: Yup.string()
      .max(20, "Le nom est trop long - doit être de 20 caractères maximum.")
      .required("nom est requis"),
    prenom: Yup.string()
      .max(20, "Le prenom est trop long - doit être de 20 caractères maximum.")
      .required("prenom est requis"),
    sexe: Yup.string(),
    // .required("sexe est requis")
    situation: Yup.string(),
    // .required("situation est requis")
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
      // .required("a propos est requis")
      ,
    langue: Yup.string().required("la langue est requis"),
    permis: Yup.string().required("le permis est requis"),
    experience: Yup.string().required("l'experience est requis"),
    formation: Yup.string(),
    // .required("formation est requis")
    competence: Yup.string().required("competence est requis"),
    loisirs: Yup.string(),
    reseaux: Yup.string(),
    // .required("réseaux sociaux est requis")
    profile: Yup.string(),
    // .required("profile image est requis")
    presentation: Yup.string().min(
      350,
      "La presentation est trop court - doit être de 150 caractères minimum."
    ),
    // .required("presentation est requis"),
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
    description: "",
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

  const initialStateCompetence = {
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
    validationSchemaResSx,
  };
}
