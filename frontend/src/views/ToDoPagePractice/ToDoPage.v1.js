// 리액트 컴포넌트 구성에 필요한 요소들을 불러옵니다.
import React , { useState } from 'react';
// 현재 컴포넌트를 꾸미기 위한 css를 가져옵니다.
import '../../assets/scss/TodoPage/TodoPage.scss';
import { callbackify } from 'util';

// TodoPage를 그려줄 Component를 선언합니다.
function TodoPage(props) {
    // UI와 연관있는 변수들을 선언합니다.
    const [items , setItems] = useState(['Hello World' , 'Hi']);
    const [todo, setTodo] = useState('');

    // ADD 버튼을 클릭했을 때 실행될 함수를 선언합니다.
    function handleCreate(){
        if(todo.trim().length === 0){
            alert('내용이 비어있어용');
        }
        else if(todo.trim().length >= 30){
            alert('내용이 너무 길어요');
        }
        else{
            setItems([...items , todo]);
            setTodo("");
        }
    }

    function handleDelete(idx){
        items.splice(idx , 1);
        setItems([ ...items ]);
    }

    // Input이 변경될 때 실행될 함수를 선언합니다.
    // handleChange(event);
    function handleChange(evt){
        setTodo(evt.target.value);
    }
    
    // 이곳의 괄호[( , )]사이 내용이 index.js의 <ToDoPageV2/>에 대체됩니다.
    // return 괄호 안에는 반드시 적어도 하나의 요소가 존재해야 합니다.
    return (
        <div className="">
            <div className="todopage-container divider divider-red">
                <h2>
                    To-Do Project
                </h2>
                <hr/>
                <div className="todopage-input-container divider divider-orange">
                    <div>
                        <div className="todo-input-group">
                            <input 
                                name="txtTodo" type="text" placeholder="할일을 입력해주세요" 
                                className="input"
                                // 값이 변경될 때마다 변수에 저장해주어야 합니다.
                                onChange={ handleChange }
                                value={ todo }
                            >    
                            </input>
                            <button 
                                typee='button' className="btn" 
                                // 버튼을 클릭했을 떄 실행될 내용이 필요합니다.
                                onClick={ handleCreate }
                                >
                                추가
                            </button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="todopage-list-container divider divider-green">
                    <ul className="list divider divider-sienna">
                        {/* 주의하십쇼 머리 터짐 */}
                        {/* 해당 부분이 제일 어렵습니다. */}
                        {
                            // 요 부분에 리스트가 표현되어야 합니다.
                            items.map(
                                (item, idx)=>{
                                    return <li  className="item divider divider-blue" 
                                                key={idx} >
                                        <p className="item-desc">{ item }</p>
                                        <button type='button' onClick={ ()=>{ handleDelete(idx) } }>del</button>
                                    </li>
                                }
                            )

                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TodoPage;