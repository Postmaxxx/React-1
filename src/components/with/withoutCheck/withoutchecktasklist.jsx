import React from 'react';
import Tasklist from '../../taskList/taskList';

const withCheck = (Component) => {
   return class withCheck extends React.Component {
        render() {
            const { taskList } = this.props;
            return (
            <Component
                taskListClass='task-list-without-check'
                taskList={taskList}
                handleCheck={e => e}
                taskListItemClass='task task-no-check'/>
            )
        }
    }
}

const TasklistWithoutCheck = withCheck(Tasklist);

export default TasklistWithoutCheck;