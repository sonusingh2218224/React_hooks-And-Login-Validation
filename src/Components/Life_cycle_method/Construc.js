import React, { Component } from 'react'

export default class Construc extends Component {
    constructor() {
        super();
        this.state = { data: "sonu singh" }
    }
    render() {
        return (
            <div>my name is {this.state.data}</div>
        )
    }
}
