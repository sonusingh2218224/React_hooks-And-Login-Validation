import React from 'react'
import ComB from './ComB'

function ComA() {
    return (
        <div>
            <h1>
                component A
                <ComB />
            </h1>
        </div>
    )
}

export default ComA