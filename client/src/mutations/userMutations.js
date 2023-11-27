import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($name: String, $email: String, $password: String) {
        createUser(name: $name, email: $email, password: $password) {
            id
            name
            email
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
            id
            name
            email
        }
    }
`;