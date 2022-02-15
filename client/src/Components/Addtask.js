import './Addtask.css'
import React,{useState} from 'react'
import axios from 'axios'

function Addtask(props) {
  const [task,setTask]=useState("")
  const Add = ()=>{
    if(task.trim()===''){
      return
    }else{
      axios.post('http://localhost:3333',{
        todo:task,
        isCompleted :false
      }).then(res=>{
        console.log(res.data)
        setTask('')
        props.addTask(res.data)
        
      }).catch(err=>console.log(err))
    }
  }
  // console.log(task);
  return (
    <div className="addtask">
      <input type="text" placeholder="Add Tasks ...." onChange={event=>setTask(event.target.value)} />
    <button onClick={()=>Add()} >Add Task</button>
    </div>
  );
}

export default Addtask;