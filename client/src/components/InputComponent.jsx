import React from 'react'
import '../styles/inputComponent.css'

const InputComponent = ({label, type, placeholder, value, onChange, name}) => {
    return (
    <div className='input_container'>
        <label>{label}</label>
        <input type={type} name={name} onChange={onChange} value={value} placeholder={placeholder} />
    </div>
    )
}

export default InputComponent;