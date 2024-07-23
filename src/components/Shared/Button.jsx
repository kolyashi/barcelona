import React from 'react';
import './Button.css';
import button from '../../img/button.png'

const Button = ({ onClick }) => {
    return (
        <button className="chat_button" onClick={onClick}>
            <img src={button} alt="" />
        </button>
    );
};

export default Button;
