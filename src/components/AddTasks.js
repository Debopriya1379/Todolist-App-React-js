import React,{useState} from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './AddTasks.css';

export default function AddTasks(props) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(! title || ! desc){
            alert("Title and Description cannot be blank");
        }else{
            props.addTasks(title,desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className="AddTasks">
            <h3>Here you can add your Tasks</h3> 
            <AssignmentIcon id="AsinIcon"/>   
            <form onSubmit={submit}>
                <input type="text" value={title} id="title" onChange={(e=>{settitle(e.target.value)})} placeholder="add title" />
                <input type="text" value={desc} id="desc" onChange={(e)=>{setdesc(e.target.value)}} placeholder="add desc" />
                <button>add</button>
            </form>
        </div>
    )
}
