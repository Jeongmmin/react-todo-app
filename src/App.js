import React, { useState } from 'react';
import Lists from "./Components/Lists";
import Form from "./Components/Form"


export default function App() {
  // state = {
  //   todoData: [
  //   ],
  //   value: "",
  // };

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  
  
  const handleSubmit = (e) => {
  // form 안에 input을 전송할 떄 페이지 리로드 되는 것을 막아준다.
    e.preventDefault();

      // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // 원래 있던 할 일에 새로운 할 일 더해주기
    // 입력란에 있던 글씨 지워주기
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
  }; 



  
    


    


    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          <Lists todoData={todoData} setTodoData={setTodoData}/>

          <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      
            
                
        </div>
      </div>  
    );
}