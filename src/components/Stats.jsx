import React from 'react'

export const Stats = ({toDoList}) => {
    let countList = toDoList.length;
  return (
    
    <div className='stats'>
        <p className='notify'>
            {countList ===0? 'you got everything! Ready to go':`You have ${countList} items on your list.`}
        </p>
    </div>
  )
}
