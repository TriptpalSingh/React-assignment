import { useEffect, useState } from "react";
import LoginContext from './loginContext.js'

const LoginState = (props)=>{
    const [loggedIn, setLoggedIn] = useState({
        "loggedIn": false,
        "username": ""
    })

    useEffect(()=>{
        const info = localStorage.getItem("loggedIn");
        const Data = JSON.parse(info);
        setLoggedIn({
            "loggedIn":Data.check,
            "username":Data.username
        })
        // console.log("done");
    },[])


    return (
        <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginState;