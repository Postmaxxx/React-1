import React from 'react';
import InputTask from '../../inputTask/inputTask.jsx';



const WithBlank = (Component) => {
    return class WithBlank extends React.Component {
        render() {
            const { cancelEdit } = this.props;
            return (
                <Component
                    handleChange= {e => e} //заглушка на изменение
                    inputValue= ' ' //заглушка на значение
                    cancelEdit= {cancelEdit}
                    classes='input-task-no-border input-task-no-cursor'             
                />
            )
        }
    }
}

const withBlankInputTask = WithBlank(InputTask);

export default withBlankInputTask;