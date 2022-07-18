import React, { Component } from 'react'

export default class Renders extends Component {
    constructor() {
        super();
        this.state = {
            email: "sonu@gmail.com"
        }
    }
    render() {

        return (
            <div>
                <h1>

                    <h1>{this.state.email}</h1>
                    <button onClick={() => this.setState({ email: "sonusingh@gmail.com" })}>button</button>

                </h1></div>
        )
    }
}
