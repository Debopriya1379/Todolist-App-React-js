import React,{useState} from 'react';
import './AddTasks.css';

export default function AddTasks(props) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(! title || ! desc){
            alert("Title ar Description cannot be blank");
        }else{
            props.addTasks(title,desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className="AddTasks">
            <h3>Here You can add your Tasks</h3>  
            <form onSubmit={submit}>
                <input type="text" value={title} id="title" onChange={(e=>{settitle(e.target.value)})} placeholder="add title" /><br/>
                <input type="text" value={desc} id="desc" onChange={(e)=>{setdesc(e.target.value)}} placeholder="add desc" /><br/>
                <button>add</button>
            </form>
        </div>
    )
}
