import React from 'react';
import '../block/block.css';
import Blockname from '../blockName/blockName.jsx';
import InputTask from '../inputTask/inputTask.jsx';
import BtnWithAdd from '../with/withAdd/withAddBtn';
import BtnWithSubmit from '../with/withSubmitBtn/withSubmitBtn';
import Tasklist from '../taskList/taskList.jsx';
import WithBlankInputTask from '../with/withBlankInputTask/withBlankInputTask.jsx';
import { NavLink } from 'react-router-dom';


class Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: [], //список задач только для этого блока
            editing: false, //запущено ли редактирование
            inputValue: ''
        }
        this.blockBtnClickAdd = this.blockBtnClickAdd.bind(this);
        this.blockBtnClickSubmit = this.blockBtnClickSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }


    static getDerivedStateFromProps(props, state) { //обновление state при обновлении props
        if (props.taskList !== state.taskList) {
            return {
                taskList: props.tasks.filter(task => { return ( 
                    task.category === props.blockname
                    )})
            }
        }
    }


    blockBtnClickAdd(e) { //включается режим редактирования
        this.setState({editing: true});
    }


    blockBtnClickSubmit(e) { //Нажатие кнопки Submit
        const { addElement, tasks } = this.props;

        const itemAlreadyExist = tasks.some(item => {return item.name === this.state.inputValue});

        if (itemAlreadyExist) {
            alert('Задача с таким именем уже существует!');
        } else if (this.state.inputValue) {
            const newEl = { //создание новой задачи по шаблону
                    name: this.state.inputValue,
                    description: this.state.inputValue + ' Bla-bla-bla',
                    createdTime: new Date().toLocaleTimeString(),
                    category: e.target.name
                };
            addElement(newEl);
            this.setState({editing: false});
            this.setState({inputValue: ''});
        };
    }
    

    handleCheck(e) { //Выбор задачи из выпавшего списка задач для переноса
        const { changeElement, blockname } = this.props;
        const element = e.target.innerText;
        changeElement(element, blockname);
        this.setState({editing: false});
    }

    handleCheckInfo(e) {
        console.log(`...some additional logic with "${e.target.innerText}"`);
    }

    handleChange(e) {
        this.setState({inputValue: e.target.value});
    }


    cancelEdit(e) { //Через установленный промежуток режим ввода отключится. 
        setTimeout(() => {
            this.setState({ editing: false });
            this.setState({inputValue: ''});
        }, 500)
    }
 

    render() {
        const { blockname, dependence } = this.props; //dependence - имя блока, от которого зависит, будет ли кнопка активной и т.д.
        const { taskList, editing } = this.state;

        let addList = this.props.tasks.filter(task => {return ( //формирование массива для выпадающего списка. Из props, т.к. мы ищем по всем заданиям
                        task.category === dependence
                        )});

        let btnIsDisable = addList.length > 0 ? false : true;
        if (dependence === '#manualAdd') {btnIsDisable = false}; //Если в поле dependence такая запись, значить можно только вводить значения, а не выбирать, соответственно кнопка Add card всегда активна
               
        return (
            <div className='block'>
                <NavLink to={'/detailed/'+blockname}>
                    <Blockname 
                        blockname={blockname} />
                </NavLink>
                <Tasklist //Список заданий в блоке
                    taskList={taskList} 
                    taskListClass='tasklist' 
                    handleCheck={(e) => this.handleCheckInfo(e)}/>
                  
               {editing ? //режим редактирования
                    addList.length === 0 ?
                        <> {/*Если неоткуда переносить элементы, создавать новые путем ввода*/}
                            <InputTask //поле input
                                inputValue={this.state.inputValue} 
                                handleChange={(e) => this.handleChange(e)}
                                cancelEdit={() => this.cancelEdit()} />

                            <BtnWithSubmit //кнопка Submit
                                btnName={blockname} 
                                click={(e) => this.blockBtnClickSubmit(e)}/>
                        </> 
                        :
                        <>  {/*Если есть откуда переносить элементы, создавать новые путем выбора из addlist*/}
                            <WithBlankInputTask 
                            cancelEdit={() => this.cancelEdit()} /> {/*Просто пустое поле input, внутри заглушка на изменения*/}
                            <Tasklist  //список задач для переноса в этот блок
                                taskList={addList} 
                                handleCheck={(e) => this.handleCheck(e)}                    
                                taskListClass='tasklist-for-migrate' />
                        </>
                :
                    <BtnWithAdd //не режим редактирования
                        btnName={blockname} 
                        click={(e) => this.blockBtnClickAdd(e)} 
                        btnIsDisable={btnIsDisable}/>
                }

                
            </div>
        )
    }
}




export default Block;

