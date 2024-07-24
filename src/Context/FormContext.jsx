import React, { createContext, useState } from "react";

export const FormContext = createContext(null);

export default function FormContextProvider({children}) {

	const [objectInfoForm, setObjectInfoForm] = useState({})

	return(
		<FormContext.Provider value={{objectInfoForm, setObjectInfoForm}}>
			{children}
		</FormContext.Provider>
	)
}