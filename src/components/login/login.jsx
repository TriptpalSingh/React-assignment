import React, {useRef, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import loginContextImport from '../../context/login/loginContext'
import './login.css'

function Login() {
    const userRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();
    const loginContext = useContext(loginContextImport);

    const handleLogin = (e)=>{
        const user = userRef.current.value;
        const pass = passRef.current.value;

        if(user === "" || pass === ""){
            alert("Please don't leave any field empty.")
            return;
        }

        const res = localStorage.getItem("users");
        let Data = JSON.parse(res);

        let flag = false;
        Data.data.map((info)=>{
            if(user === info.username && pass === info.password){
                loginContext.setLoggedIn({
                    loggedIn: true,
                    username: user
                })
                const Data = JSON.parse(localStorage.getItem("loggedIn"));
                Data.check = true;
                Data.username = user;
                localStorage.setItem("loggedIn", JSON.stringify(Data));
                navigate("/");
                flag = true;
                // console.log("Logged In.")
                return;
            }
        })
        if(flag) return;

        alert("Wrong username or password.");
    }


  return (
    <>
        <div className='login-outermost'>
            <div className='login-outer'>
                <div className='login-heading'>Log in!</div>
                <div className='login-form-div'>
                    <fieldset className='login-fieldset'>
                        <legend align="center" className='login-input-legend'>Username</legend>
                        <input type='text' ref={userRef} placeholder='Enter Username'></input>
                    </fieldset>
                    <fieldset className='login-fieldset'>
                        <legend align="center" className='login-input-legend'>Password</legend>
                        <input type='password' ref={passRef} placeholder='Enter Password'></input>
                    </fieldset>
                </div>
                <div className='login-signup-div'>
                    <div className='login-signup-ques'>Don't have an account? <Link to={"/signup"}><span className='login-signup-span'>Sign up</span></Link></div>
                </div>
                <div className='login-submit-btn-div'>
                    <div className='login-submit-btn' onClick={handleLogin}>Log in</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login