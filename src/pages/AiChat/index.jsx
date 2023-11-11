import { useState } from 'react';
import './index.css';

export default function AiChat() {
    const [chats, setChats] = useState([]);

    const handleNewChat = () => {
        setChats(prevChats => [...prevChats, 
            {id: prevChats.length, name: `Chat ${prevChats.length + 1}`}]);
    };

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
                                        {chats.map(chat => (
                                            <button className='nav-link' id={`chat-list-${chat.id}-tab`}
                                            type='button' role='tab' aria-controls={`chat-list-${chat.id}`}
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
                                <div className="tab-content" id='chat=content'>
                                    {chats.map(chat => (
                                        <div className="tab-pane fade" id={`chat-content-${chat.id}`} role='tabpanel' aria-labelledby={`chat-list-${chat.id}-tab`} key={chat.id}>
                                            {chat.name}
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