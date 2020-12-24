import "./App.css";
import tasksTemplate from "./components/source/source.js";
import categories from "./components/source/categories.js";
import footerData from "./components/source/footerData.js";
import Header from "./components/header/header.jsx"
import Board from "./components/board/board.jsx"
import Footer from "./components/footer/footer.jsx"
import { useState } from "react";
import AdditionalInfoBlock from './components/additionalInfoBlock/additionalInfoBlock.jsx';
import {
    Route,
    Switch,
  } from 'react-router-dom';


function loadTasks() {
    if (localStorage.length === 0) {return tasksTemplate;};
    return JSON.parse(localStorage.getItem('tasks'));
}


function App() {
    const [dataForFooter, setDataForFooter] = useState([]);
    const updateFooterContent = ( tasksForFooter ) => {setDataForFooter( tasksForFooter )}; //Формирование массива для вывода в footer

    const [dataForAddInfoBlock, setDataForAddInfoBlock] = useState([]);
    const updateAddInfoBlock = ( newDataForAddInfoBlock ) => {setDataForAddInfoBlock( newDataForAddInfoBlock )}; //Формирование массива для вывода в AdditionalInfoBlock

    const [tasks, setTasks] = useState(loadTasks); //Загрузка первоначальных данных

    const updateTasks = ( tasks ) => {
        setTasks(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };


    return (
    <div className='app'>
        <Header />
        <Switch>
            <Route exact path='/' children={ 
                <Board 
                    tasks={tasks}
                    categories={categories} 
                    footerData={footerData}
                    updateFooterContent={updateFooterContent} 
                    updateAddInfoBlock={updateAddInfoBlock}
                    updateTasks={updateTasks}/>
                } />
            <Route path='/detailed/*' render={(props) => {
                    return (
                    <AdditionalInfoBlock 
                        {...props}
                        dataForAddInfoBlock={dataForAddInfoBlock}
                        categories={categories}/> 
                    )
                }} />
           <Route path='/*' render={() => <h1>404 Page not found</h1>} />
        </Switch>
        <Footer 
            fields={dataForFooter} /* Активные задачи для footer (Поля Active tasks, Finished tasks, ...) */
            author={{description: "Kanban board by PostMaxxx, ", amount: "2020"}} /> 
    </div>
    )
}

export default App;



