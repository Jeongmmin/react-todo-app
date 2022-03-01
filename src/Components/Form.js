import React from 'react'

export default function Form({ handleSubmit, value, setValue }) {

    const handleChange = (e) => {
        setValue(e.target.value);
    };
        
    

    return (
            <form onSubmit={handleSubmit} className="flex pt-2">
            <input 
                type="text"
                name="value"
                className="w-full px-3 py-2 mr-4 text-gray-500 border rounded"
                placeholder= "해야 할 일을 입력하세요."
                value={value}
                onChange={handleChange}
                />
                <input 
                type="submit"
                value='입력'
                className="p-2 text-violet-300 border-2 border-violet-400 rounded hover:text-white hover:bg-violet-300"
                />
            </form>
    );
}
