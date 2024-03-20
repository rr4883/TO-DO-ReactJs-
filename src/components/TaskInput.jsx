
import React,{useState} from 'react';

export const TaskInput = ({addTask}) => {
    const [task, setTask] = useState('');
    console.log(task);
    function handleinputvalue(event){
        setTask(event.target.value);
    }
  function handleAddTask(event){
    event.preventDefault();
    addTask(task);
  }
  return (<form className='inputField' onSubmit={handleAddTask}>
    <input type="text" placeholder='Add item'
        onChange={handleinputvalue}
    />
    <button >+</button>
  </form>
  );
}
