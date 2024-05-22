import React,{useState} from "react";
import UserContext from "./userContext.js";
const userContextProvider=({children})=>{
    const[data,setData] = useState(null);
    return(
        <UserContext.Provider value={{data,setData}}>
            {children}
        </UserContext.Provider>

    )
}
export default userContextProvider;