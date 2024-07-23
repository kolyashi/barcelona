import React, { useState } from 'react';
import './Chat.css';
import ava from '../../img/ava.png';
import star from '../../img/Star.png';
import starNull from '../../img/star_null.png';
import flag from '../../img/flag.png';
import user from '../../img/user.png';
import Input from '../Shared/Input';
import Button from '../Shared/Button';

const Chat = () => {
    const [messages, setMessages] = useState([
        { sender: 'employer', text: 'Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотел бы отметить очень важную область исследования ', time: 'Вчера 17:45' },
        { sender: 'user', text: 'Что из себя представляет вулкан?Просто хочу убедиться, что готова к такому путешествию.', time: 'Вчера в 18:45' },
        { sender: 'employer', text: 'Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотел бы отметить очень важную область исследования ', time: 'Вчера 17:45' }
    ]);
    const [newUserMessage, setNewUserMessage] = useState('');
    const [newAdminMessage, setNewAdminMessage] = useState('');

    const handleSendUserMessage = () => {
        if (newUserMessage.trim() !== '') {
            const currentTime = new Date().toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            });
            setMessages([...messages, { sender: 'user', text: newUserMessage, time: `Сегодня ${currentTime}` }]);
            setNewUserMessage('');
        }
    };

    const handleSendAdminMessage = () => {
        if (newAdminMessage.trim() !== '') {
            const currentTime = new Date().toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            });
            setMessages([...messages, { sender: 'admin', text: newAdminMessage, time: `Сегодня ${currentTime}` }]);
            setNewAdminMessage('');
        }
    };

    return (
        <div className="container_chat">
            <div className='name_chat'>
                <div className='chat_user'>
                    <h1>Чат с пользователем</h1>
                    <div className='user_header'>
                        <img className='ava_photo' src={ava} alt="" />
                        <div className='employer'>
                            <h2 className='name'>Наталия Полянская</h2>
                            <div className="job_container">
                                <img className='flag' src={flag} alt="" />
                                <p className='name_job'>Гид по Баварии, фотограф</p>
                            </div>
                        </div>
                        <div className='stars'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={starNull} alt="" />
                        </div>
                    </div>
                    <div className="user_main">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.sender === 'user' ? 'message_user' : 'message_employer'}>
                                <img className='photo_chat' src={msg.sender === 'user' ? user : ava} alt="" />
                                <div className="container_message">
                                    <p className='info'>{msg.text}</p>
                                    <p className='time_message'>{msg.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="user_footer">
                        <img className='photo_chat_footer' src={user} alt="" />
                        <Input 
                            value={newUserMessage}
                            onChange={(e) => setNewUserMessage(e.target.value)}
                        />
                        <Button onClick={handleSendUserMessage}></Button>
                    </div>
                </div>
                <div className='line'></div>
                <div className='chat_admin'>
                    <h1>Чат с администратором</h1>
                    <div className='admin_header'>
                        <img className='ava_photo' src={ava} alt="" />
                        <div className='employer_admin'>
                            <h2 className='name'>Администратор</h2>
                            <div className="job_container">
                                <img className='flag' src={flag} alt="" />
                                <p className='name_job'>TravelAsk</p>
                            </div>
                        </div>
                    </div>
                    <div className="admin_main">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.sender === 'admin' ? 'message_user' : 'message_employer'}>
                                <img className='photo_chat' src={msg.sender === 'user' ? user : ava} alt="" />
                                <div className="container_message">
                                    <p className='info'>{msg.text}</p>
                                    <p className='time_message'>{msg.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="user_footer">
                        <img className='photo_chat_footer' src={user} alt="" />
                        <Input 
                            value={newAdminMessage}
                            onChange={(e) => setNewAdminMessage(e.target.value)}
                        />
                        <Button onClick={handleSendAdminMessage}>Отправить</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
