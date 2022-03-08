import React, { useCallback, useState, useEffect } from "react";
import Lists from "./Components/Lists";
import Form from "./Components/Form";
import "./App.css";

export default function App() {
  console.log("App is Rendering");

  //  localStorage에 저장된 정보 받아오기
  const [todoData, setTodoData] = useState(
    () => JSON.parse(window.localStorage.getItem("todoData")) || []
  );

  // localStorage에 정보저장
  useEffect(() => {
    window.localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);

  const [value, setValue] = useState("");

  const handleClick = useCallback(
    (id) => {
      let newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
    },
    [todoData]
  );

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
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  // 모두 지우기 버튼 함수
  const handleRemoveClick = () => {
    setTodoData([]);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-pink-100">
      <div className="w-full p-10 m-4 bg-white rounded shadow-2xl lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-20">
          <h1 className="text-4xl font-bold text-gray-700">Todo List🏃‍♀️</h1>
          <button
            onClick={handleRemoveClick}
            className="px-2 py-2 bg-violet-400 rounded-full text-white hover:bg-violet-500 hover:text-white shadow-lg"
          >
            delete all
          </button>
        </div>

        <Lists
          handleClick={handleClick}
          todoData={todoData}
          setTodoData={setTodoData}
        />

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
