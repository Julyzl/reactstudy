import React, { Component } from 'react'

export default class JSX extends Component {
    render() {
        const person ="111"
        return (
            <div>
    <h1>{person==''? '名字是空的':person}</h1>
            </div>
        )
    }
}
