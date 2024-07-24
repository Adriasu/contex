/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { FormContext } from "../Context/FormContext";

const FormInfo = () => {
  const { setObjectInfoForm } = useContext(FormContext);

  useEffect(() => {
    const formInformation = {
      mascota: "Perro",
      comida: "Pizza",
      bebida: "Cerveza",
      mayorDeEdad: "Si",
      borracho: "No",
    };
    setObjectInfoForm(formInformation)
  }, []);

  return <div></div>;
};

export default FormInfo;
