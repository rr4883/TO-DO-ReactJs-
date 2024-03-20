
import React,{useState} from 'react';

export const TaskInput = ({addTask}) => {
    const [task, setTask] = useState('');
    // console.log(task);
    function handleinputvalue(event){
        setTask(event.target.value);
    }
  function handleAddTask(event){

    event.preventDefault();
    if(task.trim()==='') return;
    addTask(task);
    setTask('');
  }
  return (<form className="inputField" onSubmit={handleAddTask}>
    <input type="text" value={task}  placeholder='Add item' onChange={handleinputvalue}
    />
    <button type='submit'>+</button>
  </form>
  );
}
