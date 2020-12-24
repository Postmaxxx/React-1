import React from 'react';

const Task = ({ text, handleCheck, taskListItemClass }) => {
    return (
        <li 
            className={taskListItemClass} 
            onClick={(e) => handleCheck(e)}>
            {text}
        </ li>
    )
}

export default Task;