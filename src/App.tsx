import { useEffect, useState } from 'react'
import './App.scss'
import CreateTask from './components/CreateTask/CreateTask'
import NavBar from './components/NavBar/NavBar'
import Task from './components/Task/Task'
import { TaskType } from './types/Task'
import { AxiosInstance } from './utils/Axios'

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await AxiosInstance.get('tasks')
        if(response.data){
          console.log(response.data)
          setTasks(response.data);
        }
        
      } catch (error) {
        
      }
    };
    getTasks();
  })

  return (
      <div className='main'>
          <NavBar/>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{marginBottom:'30px', marginTop:'15px'}}><CreateTask/></div>
            {tasks && tasks.length != 0 && tasks.map((taskData) => (
              <Task id={0} title={taskData.title} description={taskData.description} favorite={false} color={''} />
            ))}
            
          </div>
      
      </div>    
  )
}

export default App
