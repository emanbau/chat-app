import { gql } from '@apollo/client';

export const LOG_IN = gql`
    query getUser(
        $username: String!
        $password: String!
    ) {
        getUser(
            username: $username
            password: $password
        ) {
            username
            password
        }
    }
`