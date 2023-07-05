import React from "react";

import { Box, Button, useTheme } from "@mui/material";
import { PrimaryText } from "../../../../components/utils/typography";
import Space from "../../../../components/outils/Space";
import InputFeilds from "../../../../components/outils/InputFeilds";
import { useDispatch, useSelector } from "react-redux";
import { UseHooks } from "../../Hooks";
import { Formik } from "formik";
import {
  CloseModal,
  createEmploi,
  createRsociaux,
  handleModeopenEmploi,
} from "../../../../Redux/createCv/slice";
import MultipleSelectCheckmarks from "../../../../components/outils/multipleSelect";

const EmploiCo = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { EmploiArr } = useSelector((state) => state.cvs);
  const { initialStatEmploi, validationSchemaEmploi } = UseHooks();
  const { jobs } = useSelector((state) => state.jobs);

  return (
    <Formik
      initialValues={initialStatEmploi}
      validationSchema={validationSchemaEmploi}
      onSubmit={(values, formikAction) => {
        // dispatch(
        //   createEmploi([
        //     ...EmploiArr,
        //     { key: EmploiArr.length+Math.floor(Math.random() * (9 - 1 + 1) + 1) + 1 + 1, label: values },

        //   ])
        // );

        // 
        // console.log("values", values);

        // const jobsArray = values.jobs.split(",").map((job, index) => ({
        //   key: index + 1,
        //   label: job.trim(),
        // }));


        const jobsArray = values.jobs.split(",").map((jobName, index) => {
          const job = jobs.find((j) => j.name.trim() === jobName.trim());
          const key = job ? job.id : index + 1;
          return {
            key,
            label: jobName.trim(),
          };
        });
        console.log(jobsArray);
        dispatch(handleModeopenEmploi(false));
        dispatch(createEmploi(jobsArray));

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
        const { jobs } = values;

        //
        //  console.log('errors', errors)

        return (
          <>
            <>
              <PrimaryText
                fontWeight={"500"}
                fontSize={"25px"}
                text={"Ajouter votre emploi"}
                color={theme.palette.secondary.light}
                cursor
              />
              <Space space={"20px"} />

              {/* <InputFeilds
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
              /> */}

              <MultipleSelectCheckmarks
                value={jobs}
                label={"Ajouter"}
                // margin
                onChange={handleChange}
                error={errors.jobs && touched.jobs}
                helperText={errors.jobs && touched.jobs ? errors.jobs : ""}
                autoFocus={true}
                required={true}
                id={"outlined-controlled"}
                name={"jobs"}
                onBlur={() => {
                  setFieldTouched("jobs", true);
                }}
                setFieldValue={setFieldValue}
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
                Valider
              </Button>
            </Box>
          </>
        );
      }}
    </Formik>
  );
};

export default EmploiCo;
