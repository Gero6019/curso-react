import { useState } from 'react'
import './App.css'
import { AddTask } from './components/addTask'

function App() { 
  const [tasks,setTasks] = useState([])

  const addTask = (newTask)=>{
    let object = {
      task: newTask,
      status: false
    }
    setTasks([...tasks,object])
  }

  return (
    <>
      <AddTask addTask={addTask} />
    </>
  )
}

export default App
