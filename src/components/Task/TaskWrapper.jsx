import React from 'react';
import Task from './Task';
import CSS from './Task.module.css';

const Tasks = props =>{
    if(props.tasks.length<1) return null;
    
    let selectedData = props.selectedStatus!==2 
    ? props.tasks.filter(task=>task.status===props.selectedStatus)
    : props.tasks;

    let active = id => {
        if(id===props.selectedStatus){
            return ' '+CSS.activeli;
        }
    }

    let taskArr = selectedData.map((task)=>
        <Task 
            key={task.id} 
            id={task.id}
            status={task.status}
            remove={props.remove} 
            complete={props.complete} 
            incomplete={props.incomplete} 
            name={task.name}
        />
    );

    return (
        <div>
            <ul className={CSS.typeSelector}>
                <li className={active(2)} onClick={()=>{props.editSelectedStatus(2)}}>All</li>
                <li className={active(1)} onClick={()=>{props.editSelectedStatus(1)}}>Completed</li>
                <li className={active(0)} onClick={()=>{props.editSelectedStatus(0)}}>Incompleted</li>
            </ul>

            {
                props.tasks.length>1 && 
                    <button 
                        className={CSS.clear} 
                        onClick={()=>props.rmAll(props.selectedStatus)}
                    >remove all
                    </button>
            }

            <ul className={CSS.wrapper_ul}>
                {taskArr}
            </ul>
        </div>
    )
}

export default Tasks;