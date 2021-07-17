import React from 'react'
// import './Tasks.css'

export default function Taskitems({Task,onDelete}) {
    return (
        <div className="cards">
            <h4>{Task.title}</h4>
            <p>{Task.desc}</p>
            <button onClick={()=>{onDelete(Task)}}>Delete</button>
        </div>
    )
}
 