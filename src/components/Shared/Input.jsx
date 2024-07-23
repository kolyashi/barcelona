import React from 'react';
import './Input.css';

const Input = ({ value, onChange }) => {
    return (
        <input
            type="text"
            className="chat_input"
            value={value}
            onChange={onChange}
            placeholder="Введите сообщение..."
        />
    );
};

export default Input;
