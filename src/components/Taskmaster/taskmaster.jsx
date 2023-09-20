import React, {useContext, useState, useEffect} from 'react'
import Navbar from '../Navbar/navbar'
import plusPng from '../../assets/plus.png'
import loginContextImport from '../../context/login/loginContext'
import './taskmaster.css';
import List from '../list/list.jsx';

function TaskMaster() {
  const loginContex = useContext(loginContextImport);
  const [taskList, setTaskList] = useState([]);

  

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("loggedIn")).check){
      const res = JSON.parse(localStorage.getItem("lists"));
      setTaskList(res.data);
    }
  },[])



  return (
    <>
        <Navbar/>
        {
          loginContex.loggedIn.loggedIn ? (
            <>
            <div className='add-btn-div'><img src={plusPng}></img></div>
            <div className='outer'>
              {
                taskList.map((list)=> <List item={list}/>)
              }
            </div>
            </>
          ) :
          (
            <div className='message-div'>please log-in to display data.</div>
          )
        }
    </>
  )
}

export default TaskMaster