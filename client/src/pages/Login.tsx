import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { LOG_IN } from '../GraphQL/Queries/Mutations/User';

interface Props {
    
}

const Login: React.FC<Props> = ({}) => {

    // Login Field States
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    // GraphQL Login QueryS
    const [ getUser, { error, loading, data }] = useLazyQuery(
        LOG_IN, 
        {variables: {
            username: username,
            password: password,
        }}
    )

    useEffect(() => {
        if (error) console.error(error);
        if (!loading) console.log(data);
    }, [error, loading, data])

    return (
        <div>
            <input 
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => getUser()}>Log In</button>
        </div>
    )
}

export default Login;
