import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../GraphQL/Mutations/User';
import { setUsername as reduxSetUsername, setPassword as reduxSetPassword } from '../Redux/account';
import { useAppDispatch } from '../Redux/reduxhooks';
import './Signup.scss';

interface Props {
    noSignupHandle: () => void;
    loginHandle: () => void;
}


const Signup: React.FC<Props> = ({ noSignupHandle, loginHandle }) => {
    // Signup Field States
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // GraphQL Mutation
    const [createUser, { error, loading, data }] = useMutation(SIGN_UP);

    // Redux dispatch action
    const dispatch = useAppDispatch();
    
    // Sign Up Button Handler
    const signUp = async (): Promise<void>  => {
        try {
            await createUser({
                variables: {
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    password: password
                }
            });
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        if (error) console.error(error);
        if (!loading) console.log(data);
        if (data) {
            dispatch(reduxSetUsername(username));
            dispatch(reduxSetPassword(password));
            loginHandle();
            noSignupHandle();
        }
    }, [error, loading, data]);

    return (
        <div className="signup-container">
            <h1 className="signup-heading">Signup</h1>
            <p className="signup-caption">Start chatting in the browser today!</p>
            <input 
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                className="first-name-input"
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                className="last-name-input"
            />
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
            <button className="signup-button" onClick={signUp}>Launch</button>
        </div>
    )
}

export default Signup;