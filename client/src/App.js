import React,{useState,useEffect} from 'react'
import Addtask from './Components/Addtask'
import axios from 'axios'
import './App.css'
import Todolist from './Components/Todolist'
import Updatetask from './Components/Updatetask'

function App() {
  const [todolist,settodolist]=useState([])
  const [tasktoUpdate,setTasktoUpdate]=useState({})
  const [showPopup,setShowPopup]=useState(false)
  
  useEffect(()=>{
    axios.get('http://localhost:3333')
    .then(res=>{
      settodolist(res.data)
    }).catch(err=>console.log(err))
  },[])
  const addTask = newTask =>{
    settodolist([...todolist,newTask])
  }
  const taskComplete= (task)=>{
    const newList = [...todolist]
    newList.forEach(item =>{
      if(item._id===task._id){
        item.isCompleted =task.isCompleted
      }
    })
    settodolist(newList)
  }
  const removeTask =(task)=>{
    const newList = todolist.filter(item => !(item._id === task._id))
    settodolist(newList)
  }
  const updatetask = task=>{
    // console.log(task)
    const newList = [...todolist]
    newList.forEach(item=>{
      if (item._id===task._id) {
        item.todo =task.todo
      }
    })
    settodolist(newList)
  }
  return (
    <div className="App">
    <Addtask addTask= {addTask} />
    <Todolist todolist={todolist} taskComplete={taskComplete} removeTask={removeTask} tasktoUpdate={task=>setTasktoUpdate(task)} showPopup={()=>setShowPopup(!showPopup)} />
    {showPopup && <Updatetask task={tasktoUpdate} updatetask={updatetask} removePopup={()=>setShowPopup(!showPopup)} />}
    </div>
  )
}

export default App;
