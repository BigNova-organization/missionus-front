import { Box, useTheme } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import { UseClient } from "../../Hooks/UseClient";
import InputFeilds from "../../../../../components/outils/InputFeilds";
import { UseFournisseur } from "../../Hooks/UseFournisseur";
import { PrimaryButton } from "../../../../../components/Button/Button.component";
import Space from "../../../../../components/outils/Space";

const Form2 = ({ changeMode }) => {
  const theme = useTheme();

  const { IdentityState, validationSchema } = UseClient();

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ ...IdentityState }}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          // dispatch(register(object, navigation));
          console.log("values", values);
        }}
      >
        {({
          values,
          errors,
          setFieldValue,
          touched,
          isSubmitting,
          handleSubmit,
          handleChange,
          handleBlur,
          isValid,
          setValues,
          dirty,
          setFieldTouched,
        }) => {
          return (
            <RenderInputs
              values={values}
              errors={errors}
              handleChange={handleChange}
              setFieldTouched={setFieldTouched}
              touched={touched}
              handleSubmit={handleSubmit}
            />
          );
        }}
      </Formik>
    </>
  );
};

export default Form2;

const RenderInputs = ({
  handleChange,
  errors,
  values,
  touched,
  setFieldTouched,
  handleSubmit,
}) => {
  const { firstName, lastName, pseudo, email, password, confirmPassword } =
    values;
  const theme = useTheme();

  const { hidePass, HandlehidePass, hidePass2, HandlehidePass2 } =
    UseFournisseur();
  return (
    <>
      <Box
        sx={{
          bgcolor: theme.palette.primary.light,
          width: "100%",
          p: 2,
          borderRadius: 1,
        }}
      >
        <InputFeilds
          label={"pseudo"}
          error={errors.pseudo && touched.pseudo}
          helperText={errors.pseudo && touched.pseudo ? errors.pseudo : ""}
          value={pseudo}
          onChange={handleChange}
          autoFocus={true}
          required={true}
          id={"outlined-controlled"}
          name={"pseudo"}
          onBlur={() => {
            setFieldTouched("pseudo", true);
          }}
          primary

        />
        <InputFeilds
          label={"firstName"}
          error={errors.firstName && touched.firstName}
          helperText={
            errors.firstName && touched.firstName ? errors.firstName : ""
          }
          value={firstName}
          onChange={handleChange}
          autoFocus={true}
          required={true}
          id={"outlined-controlled"}
          name={"firstName"}
          onBlur={() => {
            setFieldTouched("firstName", true);
          }}
          primary

        />
        <InputFeilds
          label={"lastName"}
          error={errors.lastName && touched.lastName}
          helperText={
            errors.lastName && touched.lastName ? errors.lastName : ""
          }
          value={lastName}
          onChange={handleChange}
          autoFocus={true}
          required={true}
          id={"outlined-controlled"}
          name={"lastName"}
          onBlur={() => {
            setFieldTouched("lastName", true);
          }}
          primary

        />

        <InputFeilds
          label={"E-mail"}
          error={errors.email && touched.email}
          helperText={errors.email && touched.email ? errors.email : ""}
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
          primary

        />
        <InputFeilds
          label={"password"}
          error={errors.password && touched.password}
          helperText={
            errors.password && touched.password ? errors.password : ""
          }
          value={password}
          onChange={handleChange}
          autoFocus={true}
          required={true}
          id={"outlined-controlled"}
          name={"password"}
          onBlur={() => {
            setFieldTouched("password", true);
          }}
          type={hidePass ? "text" : "password"}
          HandlehidePass={HandlehidePass}
          showPassword={hidePass}
          password
          primary

        />

        <InputFeilds
          label={"confirm password"}
          error={errors.confirmPassword && touched.confirmPassword}
          helperText={
            errors.confirmPassword && touched.confirmPassword
              ? errors.confirmPassword
              : ""
          }
          value={confirmPassword}
          onChange={handleChange}
          autoFocus={true}
          required={true}
          id={"outlined-controlled"}
          name={"confirmPassword"}
          onBlur={() => {
            setFieldTouched("confirmPassword", true);
          }}
          type={hidePass2 ? "text" : "password"}
          HandlehidePass={HandlehidePass2}
          showPassword={hidePass2}
          password
          primary
          
        />
        <Space />
        <PrimaryButton
          text="Creer mon compte"
          onClick={handleSubmit}
          primary
        />
      </Box>
    </>
  );
};
