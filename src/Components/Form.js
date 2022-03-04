import React from 'react'

export default function Form({ handleSubmit, value, setValue }) {

    console.log("Form is Rendering");

    const handleChange = (e) => {
        setValue(e.target.value);
    };
        
    

    return (
            <form onSubmit={handleSubmit} className="flex pt-2">
            <input 
                type="text"
                name="inputvalue"
                className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow-md"
                placeholder= "해야 할 일을 입력하세요."
                value={value}
                onChange={handleChange}
                // autoComplete="off"
                />
                <input 
                type="submit"
                value='➕'
                className="px-4  text-white border-none  bg-violet-400 rounded-full hover:bg-violet-500 cursor-pointer shadow-lg"
                />
            </form>
    );
}
