// ./context.jsx
import React, { createContext } from "react";

export const NumContext = createContext(null);

export default function NumContextProvider({children}) {

	return(
		<NumContext.Provider>
			{children}
		</NumContext.Provider>
	)
}