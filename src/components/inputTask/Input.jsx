import React from 'react'
import CSS from './input.module.css'
const Input = (props) =>{
    return(
        <div className={CSS.box}>
            <input 
                className={CSS.input} 
                onChange={(e)=>{props.typing(e.target.value)}}
                value={props.currentValue}
                placeholder="Create new Task" 
            />
            <button 
                className={CSS.button} 
                onClick={()=>{props.addTask(props.currentValue)}}
            >Add
            </button>
        </div>
    )
}

export default Input;