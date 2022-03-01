import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';

export default function Lists({ todoData, setTodoData}) {

    
    const handleClick = (id) => {
        let newTodoData = todoData.filter((data) => data.id !== id)
            // console.log('newTodoData', newTodoData);
            setTodoData(newTodoData)
        };

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map((data) => {
            if (data.id === id) {
            data.completed = !data.completed;
            }
            return data;
        });
        setTodoData(newTodoData);
        };
    
        
    return (
        <div>
            <DragDropContext>
                <Dropppable>

                    {todoData.map((data) => (
                        <Draggable>

                            <div key={data.id}>
                                <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-500 bg-gray-100 border rounded">
                                    <div className="items-center">
                                        <input type="checkbox" 
                                        defaultChecked={false}
                                        onChange={() => handleCompleteChange(data.id)}
                                        />{ " " }
                                        <span className={data.completed ? "line-through" : undefined}>{data.title}</span>
                                    </div>
                                    <div>
                                        <button className="px-4 py-2 float-right" onClick={() => handleClick(data.id)}>x</button>
                                    </div>    
                                </div>
                            </div>
                            
                        </Draggable>
                    ))}

                </Dropppable>

            </DragDropContext>
        </div>
    )
}
