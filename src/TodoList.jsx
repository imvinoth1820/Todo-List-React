import './css/TodoList.css'
import { useState } from "react"

const TodoList = () => {
const[task,setTask] = useState(["Eat breakfast","Take a shower","Walk the dog"])
const[newTask,setNewTask] = useState("")

function handleInputChange(event){
  setNewTask(event.target.value)
}
function addTask(){
    if(newTask !== ""){
   setTask(t =>[...t,newTask])
   setNewTask("")
    }
}
function deleteTask(index){
   const updatedTask = task.filter((element,i)=>{
      if(i !== index){
        return true
      }else{
        return false
      }
   })
   setTask(updatedTask)
}
function moveTaskUp(index) {
    if (index > 0) {
        const updatedTask = [...task];
        [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
        setTask(updatedTask);
    }
}
function moveTaskDown(index){
    if (index < task.length - 1) {
        const updatedTask = [...task];
        [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
        setTask(updatedTask);
    }
}

  return (
    <div className="to-do-list">
        <h1>To-do-List</h1>
        <div>
            <input
                 type="text" 
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add Task</button>
        </div>
        <ol>
            {
                task.map((item,index)=>{
                   return <li key={index}>
                    <span className="text">{item}</span>
                    <button 
                    className="delete-button" 
                    onClick={()=>deleteTask(index)}>
                     Delete
                        </button>
                    <button className="move-button"
                     onClick={()=>moveTaskUp(index)}>
                        👆
                        </button>
                        <button className="move-button"
                     onClick={()=>moveTaskDown(index)}>
                        👇
                        </button>
                    </li>
                })
            }
        </ol>

    </div>
  )
}

export default TodoList
