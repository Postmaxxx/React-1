import React, { Fragment } from 'react';
import '../board/board.css';
import Block from '../block/block.jsx';



class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: props.tasks,
            categories: props.categories
        }
        this.changeElement = this.changeElement.bind(this);
        this.addElement = this.addElement.bind(this);
        this.updateFooterAfterChange = this.updateFooterAfterChange.bind(this);
        this.updateTasksForAddInfoBlock = this.updateTasksForAddInfoBlock.bind(this);
    }


    componentDidMount() {
        const { tasks } = this.state;
        this.updateFooterAfterChange({ tasks }); // //Обновление массива для Footer
        this.updateTasksForAddInfoBlock({ tasks }); //Обновление списка задач для AdditionalInfoBlock
    }


     updateFooterAfterChange({ tasks }) { //Вычисление количества задач для футера
        const { footerData, updateFooterContent } = this.props;
        const tasksForFooter = footerData.map(item => { 
            return ({
                amount: tasks.filter(task => {return task.category === item.category}).length,  
                description: item.description,
                categoryLink: item.category
            }
            )});  
        updateFooterContent(tasksForFooter); // Передача контента для футера как массива объектов (amount:Число задач в этой категории, description:Название этой категории)
    }


    updateTasksForAddInfoBlock({ tasks }) { //Обновление списка задач для AdditionalInfoBlock
        const { updateAddInfoBlock } = this.props;
        updateAddInfoBlock(tasks);
    }


    changeElement(element, blockName) { //Изменение категории элемента, т.е. смена блока на blockName
        const { updateTasks } = this.props;
        const tasksPrev = this.state.tasks; 
        const taskIndex = tasksPrev.findIndex(item => item.name === element); //Нахождение порядкового номера перемещаемого элемента, смена его категории(типа блока) и перемещение в конец массива
        tasksPrev[taskIndex].category = blockName;
        const tasks = [...tasksPrev, tasksPrev[taskIndex]];
        tasks.splice(taskIndex, 1); 

        this.setState({ tasks: [...tasks] });
        this.updateFooterAfterChange({ tasks });
        this.updateTasksForAddInfoBlock({ tasks });
        updateTasks(tasks); //Обновление tasks в app
    }



    addElement(element) { //Добавление нового элемента
        const { updateTasks } = this.props;

        const tasksPrev = this.state.tasks;
        const tasks = [...tasksPrev, element];
        this.setState({ tasks: tasks });
        this.updateFooterAfterChange({ tasks });
        this.updateTasksForAddInfoBlock({ tasks });
        updateTasks(tasks); //Обновление tasks в app
    }



    render() {        
    const { tasks, categories } = this.state;
    return (
        <div className='board'>
            {categories.map(item => {return (
                <Fragment key={item.name}>
                    <Block 
                        blockname={item.name} 
                        tasks={tasks} 
                        dependence={item.dependence} //блок, от которого зависит, будет ли кнопка активна (если этот блок не пуст) и тип ввода данных
                        changeElement={(element, blockName) => this.changeElement(element, blockName)}
                        addElement={(element) => this.addElement(element)}
                        />
                </Fragment>
            )})}
        </div>
    )

    }
}

export default Board;
