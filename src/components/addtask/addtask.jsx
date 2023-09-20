import React from 'react'

import './addtask.css'

function AddTask() {

    console.log("loaded")
  return (
    <>
        <div className='addtask-outer'>
            <div className='addtask-inner'>
                <div className='top-inner-div'>
                    <div className='inner-cross'></div>
                </div>
                <div className='middle-inner-div'>
                    <input type='text'></input>
                </div>
                <div className='bottom-inner-div'>
                    <button type='button'>Add Task</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddTask