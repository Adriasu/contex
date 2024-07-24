import React, { useContext } from "react";
import { NumContext } from "../Context/NumContext";

const ShowNum = () => {
  const { numberInput } = useContext(NumContext);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-xl size-10 bg-slate-300 flex items-center justify-center rounded-full shadow-lg border border-slate-600">
        {numberInput}
      </p>
    </div>
  );
};

export default ShowNum;
