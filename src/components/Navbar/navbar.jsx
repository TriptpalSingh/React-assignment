import React, {useContext, useEffect, useState} from 'react'
import {NavLink, useNavigate } from "react-router-dom";
import LoginContextImport from '../../context/login/loginContext'
import axios from 'axios';

import './navbar.css'

function Navbar() {

  const loginContext = useContext(LoginContextImport);
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  

  useEffect(()=>{
    // console.log("useEffect ran")
    // if(loginContext.loggedIn.loggedIn == false){
    //   console.log(loginContext.loggedIn.loggedIn)
    //   console.log("here");
    //   return;
    // }
    const num = Math.floor(Math.random() * 1000);
    axios.get(`https://picsum.photos/id/${num}/info`).then((res)=>{
      setUrl(res.data.download_url);
      
    }).catch((err)=>{
      console.log(err.response);
    })
  }, [])

  const navActive = ({isActive}) =>{
    return {
        color : isActive ? "#63e2fd" : "#ffffff",
        textDecoration: "none",
      };
  }

  const handleLogout = (e)=>{
    loginContext.setLoggedIn({
      "loggedIn": false,
      "username": ""
    })
    const Data = JSON.parse(localStorage.getItem("loggedIn"));
    Data.check = false;
    Data.username = "";
    localStorage.setItem("loggedIn", JSON.stringify(Data));
    // console.log("logged out");
    // console.log(loginContext.loggedIn.loggedIn);
    navigate('/');
  }




  return (
    <>
        <div className='nav-outer'>
          <div className='nav-logo'></div>

          <NavLink style={navActive} to={'/taskmaster'}>
            <div className='nav-link'>TaskMaster</div>
          </NavLink>

          <NavLink style={navActive} to={'/weather'}>
            <div className='nav-link'>Weather</div>
          </NavLink>

          <NavLink style={navActive} to={'/calculator'}>
            <div className='nav-link'>Calculator</div>
          </NavLink>

          <div className='nav-profile-pic'></div>
          <div className='nav-register'>
            {
              loginContext.loggedIn.loggedIn ? 
              (
                <>
                <NavLink>
                <div className='logout-btn' onClick={handleLogout}>LOGOUT</div>
              </NavLink>
              <NavLink>
                <div className='profile-div' style={{backgroundImage: `url(${url})`, backgroundSize: "cover"}}></div>
              </NavLink>
              </>
              ) :
              (
                <>
                <NavLink to={'/login'}>
                <div className='login-btn'>LOGIN</div>
              </NavLink>
              <NavLink to={"/signup"}>
                <div className='signup-btn'>SIGN UP</div>
              </NavLink>
              </>
              )
            }
            
          </div>
        </div>
    </>
  )
}

export default Navbar