import React from 'react';
import CSS from './Task.module.css';
const Task = props => {
    let handler = (id) => {
        props.status===0
        ? props.complete(id)
        : props.incomplete(id);
    }

    let active = props.status===1 ? ' '+CSS.active : '';
    
    return (
        <li className={CSS.list+active}>
            <span className={CSS.taskname+active}>{props.name}</span>
            <div className={CSS.wrapper}>
                <button 
                    className={CSS.check+active}
                    onClick={()=>{handler(props.id)}}>
                        <i className="fas fa-check"></i>
                </button>
                <button 
                    className={CSS.delete}
                    onClick={()=>{props.remove(props.id)}}>
                        <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    )
}

export default Task;