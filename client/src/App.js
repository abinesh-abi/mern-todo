import React,{useState,useEffect} from 'react'
import Addtask from './Components/Addtask'
import axios from 'axios'
import './App.css'

function App() {
  const [todolist,settodolist]=useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:3333')
    .then(res=>{
      settodolist(res.data)
    }).catch(err=>console.log(err))
  },[])
  const addTask = newTask =>{
    settodolist([...todolist,newTask])
  }
  return (
    <div className="App">
    <Addtask addTask= {addTask} />
    </div>
  );
}

export default App;
