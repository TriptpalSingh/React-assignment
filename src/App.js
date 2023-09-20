import { Routes, Route, useLocation, useNavigate, BrowserRouter } from 'react-router-dom';
import React, { useContext } from 'react';

import TaskMaster from './components/Taskmaster/taskmaster.jsx'
import Weather from './components/Weather/weather.jsx';
import Calculator from './components/Calculator/calculator.jsx'
import Login from './components/login/login.jsx'
import Signup from './components/signup/signup.jsx';
import CreateStorage from './createStorage.js';
import LoginState from './context/login/loginState.js'

import './App.css';


function App() {
  CreateStorage();
  return (
    <>
    <BrowserRouter>
        <LoginState>
          <Routes>
            <Route path='/' element={<TaskMaster/>}></Route>
            <Route path='/taskmaster' element={<TaskMaster/>}></Route>
            <Route path='/weather' element={<Weather/>}></Route>
            <Route path='/calculator' element={<Calculator/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
          </Routes>
        </LoginState>
    </BrowserRouter>
    </>
  );
}

export default App;
