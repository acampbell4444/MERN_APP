import React from 'react';
import { GET_USERS } from '../queries/userQueries';
import { DELETE_USER } from '../mutations/userMutations';
import { useQuery, useMutation } from '@apollo/client';

const Users = () => {
    
    const { loading, errors, data } = useQuery(GET_USERS);
    const [deleteUser] = useMutation(DELETE_USER, {
        update(cache, { data: { deleteUser } }) {
            const { users } = cache.readQuery({ query: GET_USERS });
            cache.writeQuery({
                query: GET_USERS,
                data: { users: users.filter((user) => user.id !== deleteUser.id) },
            });
        },
    });

    if (loading) return <p>Loading...</p>;
    if (errors) return <p>Error :</p>;

    if (!loading && !errors && data) return (
        <div>
            {data.users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <button onClick={() => deleteUser({ variables: { id: user.id } })}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Users;
