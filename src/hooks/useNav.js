import { useContext } from "react";
import { initNavigationContext} from "../context/menuContext";


export const useNav = ()=>{
    return useContext(initNavigationContext)
}
