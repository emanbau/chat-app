import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../GraphQL/Mutations/User';

interface Props {
    
}

interface Employee {
    id: number
    employee_name: string
    employee_salary: number
    employee_age: number
    profile_image: string
}


const Signup: React.FC<Props> = ({}) => {
    // Signup Field States
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // GraphQL Mutation
    const [createUser, { error, loading, data }] = useMutation(SIGN_UP);
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
    }, [error, loading, data]);

    return (
        <div>
            <input 
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
            />
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
            <button onClick={signUp}>Launch</button>
        </div>
    )
}

export default Signup;