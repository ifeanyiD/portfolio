import { createContext, useState, useRef } from "react";


export const initNavigationContext = createContext("");


export const CreateNavigation = ({children}) =>{
    const [currentNav, setCurrentNav] = useState("");
    const root = useRef(null);
    const [cord, setCord,] = useState(0);

    return(
        <initNavigationContext.Provider value={{currentNav, setCurrentNav, cord, setCord, root}}>
            {children}
        </initNavigationContext.Provider>
    )
}