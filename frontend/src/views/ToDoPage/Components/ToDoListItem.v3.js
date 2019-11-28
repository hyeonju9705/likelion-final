import React from 'react';

// 이 컴포넌트는 Props로 값을 받아서 바인드만 합니다.

function ToDoListItem(props) {
    const del = () => {
        if(window.confirm('삭제하시겠습니까?')){
            props.onDelete(props.data.id);
        }
    }
    return (
        <li  className="item divider divider-blue">
            <p className="item-desc">{ props.data.context }</p>
            <button typee='button' className="btn" onClick={del}>
                DEL
            </button>
        </li>
    );
}

export default ToDoListItem;