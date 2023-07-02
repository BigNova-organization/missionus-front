import React, { useEffect } from "react";
import {  useTheme } from "@mui/material";
import Head from "../../components/Head";
import Body from "../../components/Body";

import { useLocation, useNavigate } from "react-router-dom";
import { getDetailsProviders } from "../../Redux/getDetailsProviders/createCvSlice";
import { useDispatch, useSelector } from "react-redux";
import { UseDetailsHook } from "./Hooks";

import Space from "../../components/outils/Space";
import Presentation from "./components/presentaion";
import Experience from "./components/experience";
import Competence from "./components/competence";

const VisualiserCvDetailsProvider = () => {
  const { onError, onSuccesAction, onErrorAction } = UseDetailsHook();
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.state;

  const navigate = useNavigate();

  const onReturn = () => {
    navigate("/Devis");
  };

  useEffect(() => {
    if (id) {
      let object = {
        obj: id,
        onSuccesAction,
        onErrorAction,
      };
      dispatch(getDetailsProviders(object));
    }
  }, [id]);
  const { info: state } = useSelector((state) => state.detailsProvider);

  return (
    <>
      <Head
        title="Visualiser Curriculum Vitae"
        retur
        btn
        onReturn={() => {
          onReturn();
        }}
      />
      <Body>
        <Presentation state={state} />
        {state?.experiences.length ? (
          <>
            <Space space={20} />
            <Experience state={state} />
          </>
        ) : null}

        {state?.jobs.length ? (
          <>
            <Space space={20} />
            <Competence state={state?.jobs} title="Compétences" />
          </>
        ) : null}

        {state?.skillAndHobbies.length ? (
          <>
            <Space space={20} />
            <Competence
              state={state?.skillAndHobbies}
              title="skill And Hobbies"
            />
          </>
        ) : null}
      </Body>
    </>
  );
};

export default VisualiserCvDetailsProvider;

  
