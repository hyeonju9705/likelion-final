import React , { useState }from 'react';
import { observer, useObservable, useObserver } from "mobx-react-lite";
import '../../assets/scss/TodoPage/TodoPage.scss';

import ToDoInput from './Components/ToDoInput';
import ToDoList from './Components/ToDoList';

const ToDoPageMobx = (props) => {
    const [items , setItems] = useState(['Hello World' , 'Hi']);
    
    const handleCreate = (data)=>{
        if(data.trim().length >= 0){
            setItems([...items,data]);
        }
    }

    return (
        <div className="">
            <div className="todopage-container divider divider-red">
                <h2>
                    To-Do Project
                </h2>
                <hr/>
                <ToDoInput onCreate={handleCreate}/>
                <hr/>
                <ToDoList items={items}/>
            </div>
        </div>
    );
}

export default ToDoPageMobx;