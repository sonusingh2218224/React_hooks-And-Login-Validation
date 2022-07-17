import React, { useState } from 'react'

function UseState() {

    // const [count, SetCount] = useState(0);
    // const [name, setName] = useState("");
    const [details, setDetails] = useState({ count: 0, name: "" })

    // function increment() {
    //     SetCount(count + 1)
    // }

    function increment() {
        setDetails((prev) => ({
            ...prev,
            count: prev.count + 1

        }))

    }
    return (
        <div>
            <h1>{details.name} +  {details.count}</h1>
            <input type="text" onChange={(e) => setDetails(e.target.value)}></input>
            <button onClick={increment}>click me</button>
        </div>
    )
}

export default UseState