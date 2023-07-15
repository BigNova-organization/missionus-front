import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export function UseDetailsHook() {
  const notify = () => toast.success("CV créée avec succés");
  const onError = () => {};
  const onSuccesAction = () => {
    notify();
  };

  const onErrorAction = (message) => {
    toast.error("échec de la création du CV");
  };

  return {
    onError,
    onSuccesAction,
    onErrorAction,
  };
}
