import React, { Component } from 'react'

class Classcom extends Component {
    constructor() {
        super();
        this.state = {
            data: 0,
            textarea: "sonu singh"

        }
    }
    apple() {
        this.setState({ data: this.state.data + 1 })
    }
    update() {
        this.setState({ textarea: "radha" })
    }
    render() {
        return (
            <>
                <div>{this.state.data}</div>
                <button onClick={(() => this.apple())}>Click me</button>
                <textarea>{this.state.textarea}</textarea>
            </>
        )
    }
}

export default Classcom