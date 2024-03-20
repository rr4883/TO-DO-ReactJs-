import { useState } from "react";
import { TaskInput } from "./components/TaskInput";


function App() {
  const[toDoList ,setToDoList]=useState([]);
  const addTask =(taskname) => {
    const newTask ={taskname,checked: false};
    setToDoList([...toDoList,newTask]);
  };
  return (
    <>
      <div className="container">
        <h1>TASK MASTER</h1>

        <TaskInput addTask={addTask}/>  

        <div className="todolist">
          <span >To do</span>
          <ul className="list-items"></ul>
        </div>
      </div>
    </>
  );
}

export default App;
