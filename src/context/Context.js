import React, { useContext, useEffect,useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

const Context = ({children}) => {

    const navigate = useNavigate();
    const initial = JSON.parse(window.localStorage.getItem("user"));
    const [userData , setUserData] = useState(initial);
    const [requestedAppt,setrequestedAppt] = useState([]);
    useEffect(()=>{
        const data = JSON.parse(window.localStorage.getItem("user"));
        // if(!data)
        //   navigate("/");
        // else
          setUserData(data);
    },[navigate]);

  return (
    <AppContext.Provider value={{userData,setUserData,requestedAppt,setrequestedAppt}}>{children}</AppContext.Provider>
  )
}

export default Context;