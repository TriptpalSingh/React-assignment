import React, {useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';

import './signup.css'

function Signup() {
    const navigate = useNavigate();
    const userRef = useRef();
    const passRef = useRef();
    const emailRef = useRef();

    const handleSignup = (e)=>{
        const user = userRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const res = localStorage.getItem("users");
        let Data = JSON.parse(res);
        
        if(user === "" || email === "" || pass === ""){
            alert("please dont leave any field empty");
            return;
        }
        else{
            let flag = false;
            Data.data.map((info)=>{
                if(email == info.email){
                    alert("This email has already been registered.");
                    flag = true;
                    return;
                }
                if(user == info.username){
                    alert("This username has already been registered.");
                    flag = true;
                    return;
                }
            })
            if(flag){
                return;
            }
            Data.data.push({
                username: user,
                email: email,
                password: pass
            })
            localStorage.setItem("users", JSON.stringify(Data));
            navigate('/login')
        }


    }

  return (
    <>
        <div className='signup-outermost'>
            <div className='signup-outer'>
                <div className='signup-heading'>Sign Up!</div>
                <div className='signup-form-div'>
                    <fieldset className='signup-fieldset'>
                        <legend align="center" className='signup-input-legend'>Username</legend>
                        <input type='text' ref={userRef} placeholder='Enter Username'></input>
                    </fieldset>
                    <fieldset className='signup-fieldset'>
                        <legend align="center" className='signup-input-legend'>Email Address</legend>
                        <input type='email' ref={emailRef} placeholder='Enter Email Address'></input>
                    </fieldset>
                    <fieldset className='signup-fieldset'>
                        <legend align="center" className='signup-input-legend'>Password</legend>
                        <input type='password' ref={passRef} placeholder='Enter Password'></input>
                    </fieldset>
                </div>
                <div className='signup-signup-div'>
                    <div className='signup-signup-ques'>Already have an account? <Link to={"/login"}><span className='signup-signup-span'>Log in</span></Link></div>
                </div>
                <div className='signup-submit-btn-div'>
                    <div className='signup-submit-btn' onClick={handleSignup}>Sign Up</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup