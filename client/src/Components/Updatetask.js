import './Updatetask.css'
import React,{useState} from 'react'
import axios from 'axios'

function Updatetask(props) {
  const [task,setTask]= useState(props.task.todo)
  const updateTask=()=>{
    if(task.trim()==='' || props.task.todo===task){
      return
    }else{
      axios.put(`http://localhost:3333/${props.task._id}`,{
        _id:props.task._id,
        todo:task,
        isCompleted:props.task.isCompleted
      }).then(res=>{
        props.removePopup()
        props.updateTask(res.data)
      }).catch(err => console.log(err))
    }
  }
  return (
    <div className="popup">
  <div className='popup-content'>
    <input type="text" placeholder="Update Tasks ..." value={task} onChange={event=>setTask(event.target.value)} />
    <button onClick={()=>updateTask} >Update</button>
  </div>
</div>
    )
}
export default Updatetask