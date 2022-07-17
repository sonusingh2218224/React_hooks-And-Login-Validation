import React from 'react'
import { FirstName } from '../../App'
function ComC() {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return <h1>hello {fname}</h1>
                }}
            </FirstName.Consumer>
        </>
    )
}

export default ComC