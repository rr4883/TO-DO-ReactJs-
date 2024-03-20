import { useState } from "react";
import { TaskInput } from "./components/TaskInput";
import { TaskItem } from "./components/TaskItem";
import './index.css';
import { Stats } from "./components/Stats";


function App() {
  const[toDoList ,setToDoList]=useState([]);
  const addTask =(taskname) => {
    const newTask ={taskname,checked: false};
    setToDoList([...toDoList,newTask]);
  };
  function deletTask(deletTaskName){
    setToDoList(toDoList.filter(task=> task.taskname !== deletTaskName))
  }
  function toggleCheck(taskname){
    setToDoList((prevToDoList) => prevToDoList.map
    (task=> task.taskname === taskname ? {...task,checked:!task.checked}: task)
    );
  }
  console.log(toDoList);
  return (
    <>
      <div className="container">
        <h1>TASK MASTER</h1>

        <TaskInput addTask={addTask}/>  

        <div className="toDoList">
          <span >To do</span>
          <ul className="list-items">
            {toDoList.map(( task, key)=>(
              <TaskItem task={task} key={key} deletTask={deletTask} toggleCheck ={toggleCheck}/>
               
            ))}
          </ul>
          {toDoList.length ===0? (<p className="notify">You are done!</p>):null}
        </div>
      </div>
      <Stats toDoList={toDoList}/>
    </>
  );
}

export default App;
