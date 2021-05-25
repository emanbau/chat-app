import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { LOG_IN } from '../GraphQL/Queries/User';
import { setUsername as reduxSetUsername, setPassword as reduxSetPassword } from '../Redux/account';
import { useAppDispatch } from '../Redux/reduxhooks';
import './Login.scss'

interface Props {
    loginHandle: () => void
}

const Login: React.FC<Props> = ({ loginHandle }) => {

    // Login Field States
    const [ username, setUsername ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    // GraphQL Login QueryS
    const [ getUser, { error, loading, data }] = useLazyQuery(
        LOG_IN, 
        {variables: {
            username: username,
            password: password,
        }}
    )

    // Redux States & Reducers
    const dispatch = useAppDispatch();
    
    // Load Login Query
    useEffect(() => {
        if (error) console.error(error);
        if (!loading) console.log(data);
    }, [error, loading, data])

    // Change Redux State on Successful Login Query
    useEffect(() => {
        if (data) {
            dispatch(reduxSetUsername(username));
            dispatch(reduxSetPassword(password));
            loginHandle();
        }
    }, [data, username, password, dispatch, loginHandle])

    return (
        <div className="login-container" >
            <h1 className="login-heading">Login</h1>
            <p className="login-caption">Start chatting today!</p>
            <input 
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="username-input"
            />
            <input 
                type="text"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
            />
            <button className="login-button" onClick={() => getUser()}>Log In</button>
        </div>
    )
}

export default Login;
