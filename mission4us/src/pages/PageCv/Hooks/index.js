import * as Yup from "yup";
import { fr } from "yup-locales";
import useStyles from "../styles";

export function UseHooks() {
 
  const initialState = {
    code: "",
  };

  const OnSubmit = async (data) => {
    // console.log('ddd',data);
    // await dispatch({ type: "LOGIN", payload: data });
  };

  let validationSchema = Yup.object().shape({
    code: Yup.string()
      .max(6, "Le code est trop long - doit être de 6 caractères maximum.")
      .min(6, "Le code est trop court - doit être de 6 caractères maximum.")
      .required("code est requis"),
  });
  const classes = useStyles();

  return {
   
    initialState,
    validationSchema,
    OnSubmit,
    classes

  };
}
