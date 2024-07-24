import React from "react";
import NumContextProvider from "./Context/NumContext.jsx";
import InputNum from "./Components/InputNum.jsx";
import ShowNum from "./Components/ShowNum.jsx";
import FormContextProvider from "./Context/FormContext.jsx";
import FormInfo from "./Components/FormInfo.jsx";
import CardInfoForm from "./Components/CardInfoForm.jsx";

const App = () => {
  return (
    <NumContextProvider>
      <FormContextProvider>
        <InputNum />
        <ShowNum />
        <FormInfo/>
        <CardInfoForm/>
      </FormContextProvider>
    </NumContextProvider>
  );
};

export default App;
