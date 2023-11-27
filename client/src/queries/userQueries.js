import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query { users { id name email } }
`;

export const CHECK_USER_CREDENTIALS = gql
    `query ($email: String!, $password: String!) {
        userEmailAndCredentials(email: $email, password: $password) {
            id
            name
            email
        }
    }`;