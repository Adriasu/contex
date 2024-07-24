// ./context.jsx
import React, { createContext } from "react";

export const FormContext = createContext(null);

export default function FormContextProvider({children}) {

	return(
		<FormContext.Provider>
			{children}
		</FormContext.Provider>
	)
}