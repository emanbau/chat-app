import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

interface Props {
    
}

// Socket IO Setup
let socket;
const CONNECTION_PORT: string = 'localhost:3001/';

const Messenger: React.FC<Props> = ({}) => {

    // Room State
    const [room, setRoom] = useState('');

    useEffect(() => {
        // Setup connection to server on first render
        socket = io(CONNECTION_PORT);
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Messenger
