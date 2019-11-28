import React , { useState , useEffect } from 'react';
import '../../assets/scss/TodoPage/TodoPage.scss';
import axios from 'axios';

// 이 예제에서는 ToDo를 여러 컴포넌트로 분리합니다.
// 아래 컴포넌트들은 삽입부와 리스트부를 나누어 둔 것 입니다.
import ToDoInput from './Components/ToDoInput';
import ToDoList from './Components/ToDoList.v3';

function TodoPage(props) {
    // 입력에 관련된 값은 굳이 ToDo페이지 자체에서 가질 필요없으므로 
    // 제외하고 items만 관리합니다.
    const [items , setItems] = useState([]);

    // 설정에 관련된 항목만 가지고 있습니다.
    // 주소를 갖고 있습니다. 그외에 필요한 항목을 여기서 가져옵니다.
    const config = {
        url : 'http://localhost:8000/api/'
    }

    // 목록을 가져옵니다.
    const get = async () => {
        let res = await axios({
            url : config.url , 
            method : 'get'
        });
        setItems([...res.data]);
    }

    // 목록을 가져옵니다. Promise를 사용합니다.
    const getWithPromise = () => {
        return axios({
            url : config.url,
            method : 'get'
        });
    }

    // 글을 추가할때 사용합니다.
    const post = async (context)=>{
        let res = await axios({
            url : config.url,
            method : 'post',
            data : {
                context : context,
                is_closed : false
            }
        });
    }
    
    // 삭제할 때 사용합니다. 
    // 아이디는 별도로 넘기지 않고 , 주소에 추가합니다.
    const del = async (id) =>{
        let res = await axios({
            url : config.url + id,
            method : 'delete'
        });
    }

    // 해당 컴포넌트가 로드될 때 자동으로 실행되는 부분입니다.
    useEffect(()=>{
        // get();
        getWithPromise()
        .then(res=>{
            setItems([...res.data]);
        })
        .catch(res=>{
            alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요');
        })
    },[]);

    // 생성할 때 실행되는 함수입니다.
    const handleCreate = async (data)=>{
        if(data.trim().length >= 0){
            // setItems([...items,{ context : data }]);
            await post(data);
            await get();
        }
    }

    // 삭제될 때 실행되는 함수입니다.
    const handleDelete = async (id)=>{
        await del(id);
        await get();
    }

    return (
        <div className="">
            <div className="todopage-container divider divider-red">
                <h2>
                    To-Do Project
                </h2>
                <hr/>
                {/* 이 부분은 ToDoInput.js을 찾아 들어가면 만날 수 있습니다. */}
                {/* 특이한 점은 onCreate라는 이름으로 함수를 자식 컴포넌트에게 넘겨주는 것 입니다. */}
                {/* 부모 컴포넌트의 함수를 자식 컴포넌트에게 넘겨주면 자식 컴포넌트가 부모 컴포넌트 기능을 쓸 수 있습니다. */}
                <ToDoInput onCreate={handleCreate}/>
                <hr/>
                {/* 이 부분은 ToDoList.js을 찾아 들어가면 만날 수 있습니다. */}
                {/* List로 출력할 아이템들은 items에 해당됩니다. */}
                <ToDoList items={items} onDelete={ handleDelete }/>
            </div>
        </div>
    );
}

export default TodoPage;