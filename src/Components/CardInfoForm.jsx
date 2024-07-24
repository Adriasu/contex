import React, { useContext } from "react";
import { FormContext } from "../Context/FormContext";

const CardInfoForm = () => {
  const { objectInfoForm } = useContext(FormContext);

  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="w-[300px] h-[200px] border-[2px] border-blue-800 rounded-2xl flex flex-col justify-center items-center text-xl">
        <p>Tu mascota favorita: {objectInfoForm.mascota}</p>
        <p>Tu comida favorita: {objectInfoForm.comida}</p>
        <p>Tu bebida favorita: {objectInfoForm.bebida}</p>
        <p>Eres mayor de edad o no: {objectInfoForm.mayorDeEdad}</p>
        <p>Eres borracho o no: {objectInfoForm.borracho}</p>
      </div>
    </div>
  );
};

export default CardInfoForm;
