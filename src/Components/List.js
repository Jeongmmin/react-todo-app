import React, { useState } from "react";

const List = React.memo(
  ({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick,
  }) => {
    console.log("List is Rendering");

    // State
    const [isEdting, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    // 할 일 완료 표시 기능
    const handleCompleteChange = (id) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodoData);
    };

    // 할 일 수정기능
    const handleEditChange = (e) => {
      setEditedTitle(e.target.value);
    };

    // 수정된 내용으로 변경되어 보이게 하는 기능
    const handleSubmit = () => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editedTitle;
        }
        return data;
      });

      setTodoData(newTodoData);
      setIsEditing(false);
    };

    // 수정중 일 때
    if (isEdting) {
      return (
        <div className="flex items-center justify-between w-full px-4 bg-gray-100  py-1 my-2 text-gray-500 border rounded shadow-md">
          <div className="items-center">
            <form onSubmit={handleSubmit}>
              <input
                className="w-full px-3 py-2 mr-4 text-gray-500"
                autoFocus="true"
                value={editedTitle}
                onChange={handleEditChange}
              />
            </form>
          </div>
          <div>
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(false)}
            >
              ↺
            </button>
            <button
              type="submit"
              className="px-4 py-2 float-right"
              onClick={handleSubmit}
            >
              save
            </button>
          </div>
        </div>
      );
      // 평소 보이는 모습 & 수정완료 모습
    } else {
      return (
        <div
          key={id}
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          className={`${
            snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
          } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-500 border rounded shadow-md`}
        >
          <div className="items-center">
            <input
              type="checkbox"
              defaultChecked={completed}
              onChange={() => handleCompleteChange(id)}
            />{" "}
            <span className={completed ? "line-through" : undefined}>
              {title}
            </span>
          </div>
          <div>
            <button
              className="px-4 py-2 float-right"
              onClick={() => handleClick(id)}
            >
              X
            </button>
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(true)}
            >
              edit
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;
