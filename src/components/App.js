import React from 'react';
import css from './App.module.css';
import InputContainer from './inputTask/InputContainer';
import TaskConstainer from './Task/TaskContainer';
const App = () => {
    return (
        <div className={css.App}>
            <h1 className={css.description}>TODO App</h1>
            <InputContainer />
            <TaskConstainer />
        </div>
    )
}

export default App;