import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../Redux/reduxhooks';
import { io } from 'socket.io-client';

interface Props {
    
}

// Interface for socket message content
interface Content {
    author: string;
    message: string;
}

interface MessageContent {
    room: string;
    content: Content;
}

// Socket IO Setup
let socket: any;
const CONNECTION_PORT: string = 'localhost:3001/';

const Messenger: React.FC<Props> = () => {

    // Room States
    const [inARoom, setInARoom] = useState<boolean>(false);
    const [room, setRoom] = useState<string>('');

    // Redux User Account Data
    const accountUsername = useAppSelector(state => state.account.account.username);

    // Message States
    const [messageList, setMessageList] = useState<Array<Content>>([]);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        // Setup connection to server on first render
        socket = io(CONNECTION_PORT);
    }, [])

    // Connect to room handle
    const connectToRoom: () => void = () => {
        setInARoom(true);
        socket.emit('join_room', room);
    }

    // Receive Messages
    useEffect(() => {
        socket.on('receive_message', (data: Content) => {
            setMessageList([...messageList, data]);
        })
    })

    // Send Message
    const sendMessage = async (): Promise<void> => {
        // Message Content
        let messageContent: MessageContent = {
            room: room,
            content: {
                author: accountUsername,
                message: message,
            }
        };

        setMessageList([...messageList, messageContent.content]);
        setMessage('');
        await socket.emit("send_message", messageContent);
    }

    return (
        <div>
            {!inARoom ? (
                <div className="room-selector">
                    <input type="text" onChange={(e) => setRoom(e.target.value)} placeholder="Enter Room Name" />
                    <button onClick={connectToRoom}>Join Room</button>
                </div>
            ) : (
                <div className="messenger-page-container">
                    <div className="chat-container">
                        {messageList.map((message: Content) => {
                            return(                               
                                <div className="messageList-container">
                                    <p>{message.author}</p>
                                    <div className="message">
                                        <p>{message.message}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="message-input-container">
                        <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            )

            }
        </div>
    )
}

export default Messenger
