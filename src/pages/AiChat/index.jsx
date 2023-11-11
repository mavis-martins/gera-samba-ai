import { useState } from 'react';
import './index.css';
import sent from '../../assets/images/sentInput.svg';

export default function AiChat() {
    const [chats, setChats] = useState([]);

    const handleNewChat = () => {
        setChats(prevChats => [...prevChats, 
            {id: prevChats.length, name: `Chat ${prevChats.length + 1}`}]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <>
            <div className="chat-backdoor-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="chat-side-bar">
                                <div className="side-bar">
                                    <button className='new-chat' onClick={handleNewChat}>
                                        + Chat
                                    </button>
                                    <div 
                                    className="nav 
                                    flex-column nav-pills me-3" 
                                    id="chat-list" 
                                    role='tablist' 
                                    aria-orientation='vertical'
                                    >
                                        {chats.map((chat, index) => (
                                            <button className={`nav-link ${index === 0 ? 'active' : ''}`} id={`chat-list-${chat.id}-tab`}
                                            data-bs-toggle="pill" href={`#chat-content-${chat.id}`} type='button' role='tab' aria-controls={`chat-list-${chat.id}`}
                                            aria-selected='false' key={chat.id}>
                                                {chat.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="chat-conversation">
                                <div className="tab-content" id='chat-content'>
                                    {chats.map((chat, index) => (
                                        <div className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} 
                                        id={`chat-content-${chat.id}`} 
                                        role='tabpanel' 
                                        aria-labelledby={`chat-list-${chat.id}-tab`}
                                        key={chat.id}
                                        >
                                            <div className="container">
                                                <div className="chat-space">
                                                    <div className="chat-float">
                                                        <p className='user-float'>
                                                            {chat.name}
                                                        </p>
                                                        <p className='gera-samba-float'>
                                                            {chat.name}
                                                        </p>
                                                    </div>
                                                    <div className="chat-send">
                                                        <form onSubmit={handleSubmit}>
                                                            <textarea
                                                            type='text'
                                                            placeholder='Inicie aqui seu primeiro bot!'
                                                            />
                                                            <button type='submit'>
                                                                <img src={sent} alt='Enviar'/>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}