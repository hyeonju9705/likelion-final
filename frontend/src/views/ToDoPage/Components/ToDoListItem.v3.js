import React from 'react';

// 이 컴포넌트는 Props로 값을 받아서 바인드만 합니다.

function ToDoListItem(props) {
    // 삭제 버튼을 클릭했을 때 실행되는 함수를 불러옵니다.
    // 계속 전달받은 onDelete라는 함수를 직접 실행하게 됩니다.
    // 이 함수는 TodoListPage.v3파일에 있습니다.
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