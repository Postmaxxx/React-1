import React from 'react';
import Task from '../task/task';
import './taskList.css';

const Tasklist = ({ taskListClass, taskList, handleCheck, cancelEdit }) => { //Tasklistclass - устанавливаемый класс для задач
    return (
        <div className={taskListClass} onBlur={cancelEdit}> {/*при потере фокуса - отмена редактирования. Тупо, но по другому было делать слишком замороченно*/}
            <ul>
                {taskList.map(item => {return (
                        <Task 
                            text={item.name} 
                            handleCheck={handleCheck} 
                            key={item.createdTime}/>
                )})}
            </ul>
        </div>
    )
}

export default Tasklist;
