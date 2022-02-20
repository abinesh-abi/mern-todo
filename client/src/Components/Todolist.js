import './Todolist.css'
import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios'

function Todolist(props) {
  return(
    <div className='tasklist'>
    <ul>
    {props.todolist.map((task,index)=>{
    console.log(task,'task')
     const taskComplete = task=>{
       axios.put(`http://localhost:3333/${task._id}`,
       {
         _id:task._id,
         todo:task.todo,
         isCompleted:!task.isCompleted
       }).then(res=>props.taskComplete(res.data))
       .catch(err=>console.log(err))
     }
     const removeTask = id=>{
    // console.log(id);
       axios.delete(`http://localhost:3333/${id}`)
       .then(res=>props.removeTask(res.data))
       .catch(err=>console.log(err))
     }
      return(
      
        <li key={index}>
          <div>
            <CheckIcon className={task.isCompleted ?'isCompleted':'checkicon'} />
            <p className={task.isCompleted ? 'taskcomplete':''} onClick={()=>taskComplete(task)}>{task.todo}</p>
          </div>
          <div>
            <EditIcon className='edit'onClick={()=>{
              props.tasktoUpdate(task)
              props.showPopup()
            }} />
            <CloseIcon className='Close' onClick={()=>removeTask(task._id)} />
          </div>
        </li>
        
      )
    })}
    </ul>
    </div>
    )
}
export default Todolist