import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../GraphQL/Mutations/User';

interface Props {
    
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
    const signUp = async () => {

    }

    useEffect(() => {
        if (error) console.error(error);
        if (!loading) console.log(data);
    }, [error, loading, data]);

    return (
        <div>
            
        </div>
    )
}

export default Signup;