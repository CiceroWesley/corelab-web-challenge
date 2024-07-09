import { useState } from 'react'
import './App.scss'
import CreateTask from './components/CreateTask/CreateTask'
import NavBar from './components/NavBar/NavBar'
import Task from './components/Task/Task'
import { TaskType } from './types/Task'
import { AxiosInstance } from './utils/Axios'

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  const handleTask = async (q : string) => {
    try {
      const response = await AxiosInstance.get(`tasks?q=${q}`);
      if(response.data){
        // console.log(response.data)
        setTasks(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <div className='main'>
          <NavBar handleTask={handleTask}/>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{marginBottom:'30px', marginTop:'15px'}}><CreateTask/></div>
            <div className='tasks'>
              {tasks && tasks.length != 0 && tasks.map((taskData) => (
                <Task id={taskData.id} title={taskData.title} description={taskData.description} favorite={taskData.favorite} color={taskData.color} />
              ))}
            </div>
            
          </div>
      
      </div>    
  )
}

export default App
