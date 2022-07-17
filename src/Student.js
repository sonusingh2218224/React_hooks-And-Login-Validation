import React from 'react'

function Student(props) {
    return (
        <div>
            <h1>hello sonu </h1>
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
        </div>
    )
}

export default Student