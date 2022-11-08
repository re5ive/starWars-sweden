import React ,{createContext} from 'react'
import useApiFetch from "../hooks/useApiFetch.js";
export const AppContext = createContext(null);

export const AppProvider = ({children }) => {
    const [data,setUrl, setOrder, order] = useApiFetch()
    return (
        <AppContext.Provider value={{data, setUrl, setOrder, order}}>
            {children}
        </AppContext.Provider>

    )
}