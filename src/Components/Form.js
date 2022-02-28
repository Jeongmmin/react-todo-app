import React from 'react'

export default function Form({ handleSubmit, value, setValue }) {

    const handleChange = (e) => {
        setValue(e.target.value);
    };
        
    

    return (
            <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
            <input 
                type="text"
                name="value"
                style={{ flex: '10', padding: '5px' }}
                placeholder= "해야 할 일을 입력하세요."
                value={value}
                onChange={handleChange}
                />
                <input 
                type="submit"
                className='btn'
                style={{ flex: '1' }}
                value='입력'
                />
            </form>
    );
}
