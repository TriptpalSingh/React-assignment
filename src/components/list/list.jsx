import React, {useId} from 'react';
import dotsPng from '../../assets/dots.png'
import plusPng from '../../assets/plus.png'
import {useNavigate} from 'react-router-dom';
import AddTask from '../addtask/addtask';

import './list.css';

function List(props) {

    const item = props.item;

    const handleAddTask = (e)=>{
        
    }


  return (
    <>
        <div className='list-outer-div'> 
            <div className='list-title-div'>
                <div className='list-ti1tle'>{item.title}</div>
                <div className='list-dots' style={{backgroundImage: `url(${dotsPng})`, backgroundSize: "cover"}}></div>
            </div>
            <div className='list-add-task-div' onClick={handleAddTask}>
                <div className='list-add-task-circle'><img src={plusPng}></img></div>
                <div className='list-add-task-btn'>Add a task</div>
            </div>
            {
                item.items.map((task)=> <div className='task-div'>
                    <div className='task-circle'></div>
                    <div className='task-name'>{task}</div>
                </div>)
            }
        </div> 
    </>
  )
}

export default List