import React, { useEffect, useState } from 'react'

function UsingFetch() {
    const [user, setUsers] = useState([])

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json();
            }).then(data => {
                setUsers(data);
            })
    }

    useEffect(() => {
        fetchData();

    }, [])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map(u => (
                        <tr key={u.id}>
                            <th scope="row" key={u.id}>{u.name}</th>
                            <td>{u.username}</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    )

                    )}


                </tbody>
            </table>
        </div>
    )
}

export default UsingFetch