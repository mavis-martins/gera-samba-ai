import './index.css';
import { useState} from 'react';

export default function SideBar() {
    const [chats, setChats] = useState([]);

    const handleNewChat = () => {
        setChats(prevChats => [...prevChats, 
            {id: prevChats.length, name: `Chat ${prevChats.length + 1}`}]);
    };

    return(
        <>
            
        </>
    )
}