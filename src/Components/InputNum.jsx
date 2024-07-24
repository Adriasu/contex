import React, { useContext, useEffect } from "react";
import { NumContext } from "../Context/NumContext";

const InputNum = () => {
  const { setNumberInput } = useContext(NumContext);

  useEffect(() => {
    setNumberInput(30);
  });

  return (
    <div className="w-full h-[70px] flex justify-center items-center gap-8 mt-8">
      <input className="border-[2px] rounded-md" type="number" />
      <button className="border-[2px] py-1 px-2 rounded-md shadow-md bg-slate-300">Enviar</button>
    </div>
  );
};

export default InputNum;
