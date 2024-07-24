// ./context.jsx
import React, { createContext, useState } from "react";

export const NumContext = createContext(null);

export default function NumContextProvider({children}) {

	const [numberInput, setNumberInput] = useState(0)

	return(
		<NumContext.Provider value={{numberInput, setNumberInput}}>
			{children}
		</NumContext.Provider>
	)
}