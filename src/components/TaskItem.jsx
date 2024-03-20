import React from 'react';
import {MdDeleteSweep} from 'react-icons/md'

export const TaskItem = ({task,deletTask,toggleCheck}) => {
  return (
    <li className="items">
        <div className="items-text">
            <input type="checkbox" checked={task.checked} onChange={()=> toggleCheck(task.taskname)}/>
            <p className={task.checked?'isChecked':''}>{task.taskname}</p>
        </div>
        <MdDeleteSweep className="delete-icon" onClick={() => deletTask(task.taskname)} />


    </li>
  );
};
