import React from 'react'

const Tasks = (props) => {

  return (
    // <div className='card'>
    <div className={`${props.background} task`}>
    <div className="">
      <p>{props.Name}</p>
      <p>{props.Description}</p>
      <p>Year: {props.Course}</p>
      <button>Click Me</button>
    </div>
    </div>
    // </div>
  )
}

export default Tasks