import React from 'react';
import Taskitems from './Taskitems'
import "./Tasks.css";

export default function Tasks(props) {
    return (
        <div className="TasksContainer">
            {props.Tasks.map((childTask)=>{
               return <Taskitems Task={childTask} key={childTask.sno} onDelete={props.onDelete}/>
            })}
        </div>
    )
}
