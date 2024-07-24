import React, { useContext, useEffect } from "react";
import { NumContext } from "../Context/NumContext";

const InputNum = () => {
  const { setNumberInput } = useContext(NumContext);

  useEffect(() => {
    setNumberInput(30);
  });

  return (
    <div>
      <input className="border-[2px]" type="number" />
      <button>Enviar</button>
    </div>
  );
};

export default InputNum;
