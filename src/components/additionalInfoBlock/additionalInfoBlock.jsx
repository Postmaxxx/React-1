import React from 'react';
import '../additionalInfoBlock/additionalInfoBlock.css';


const AdditionalInfoBlock = (props) => { //Вывод расширенной информации по щелчку нак заголовок блока (категории)
    const currentCategory = props.match.params[0]; //Необходимая к показу категория берется из URL
    const { dataForAddInfoBlock, categories } = props;

    const categoryExist = categories.some(item => {return item.name === currentCategory}); //Есть ли такакя категория

    if (categoryExist) {
        const newTasks = dataForAddInfoBlock.filter(item => item.category === currentCategory);
        return (
            <div className='additionalInfoBlock'>
                <h2>{currentCategory}</h2>
                {newTasks.map(item => { return (
                    <div className='additionalInfoItem' key={item.name}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Время создания задачи: {item.createdTime}</p>
                    </div>
                )})}
            </div>
        )
    } else {
        return (
        <h1>Category '{currentCategory}' not found</h1>
        )
    }
}


export default AdditionalInfoBlock;
