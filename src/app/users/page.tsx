import React from 'react'
import ProductCard from '../components/ProductCard'

interface User {
    id: number;
    name: string;
}

const UserPage = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users',
        {
            // cache: 'no-store', // This is for if you dont want the cache to be stored at all
            // next: {
            //     revalidate: 10
            // }
        }

    );
    const users: User[] = await response.json();

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map((user: User) => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}

export default UserPage;  