import React, { useState } from 'react';
import Lists from "./Components/Lists";
import Form from "./Components/Form"
import "./App.css"


export default function App() {

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
      <div className="flex items-center justify-center w-screen h-screen bg-pink-100">
        <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
          <div className="flex justify-between mb-3">
            <h1>할 일 목록</h1>
          </div>

          <Lists todoData={todoData} setTodoData={setTodoData}/>

          <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
          
        </div>
      </div>  
    );
}