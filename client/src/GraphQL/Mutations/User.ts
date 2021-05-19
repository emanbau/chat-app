import { gql } from '@apollo/client';

export const SIGN_UP = gql`
    mutation createUser(
        $firstName: String!
        $lastName: String!
        $username: String!
        $password: String!
    ) {
        createUser(
            firstName: $firstName
            lastName: $lastName
            username: $username
            password; $password
        ) {
            successful
            message
        }
    }
`