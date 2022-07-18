import React, { Component } from 'react'

export class CompDidMount extends Component {
    componentWillUnmount() {
        console.log("componentWillMount")
    }
    constructor() {
        super();
        this.state = {
            name: "arun"
        }

    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    render() {
        console.warn("render")
        return (
            <div>
                <h1>CompDidMount{this.state.name}</h1>
                <button onClick={() => this.setState({ name: "sonu" })}>Click me</button>
            </div>
        )
    }
}

export default CompDidMount