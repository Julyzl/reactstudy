import React, { Component } from 'react'

export default class sun extends Component {
    render() {
        return (
            <div>
                <h3>这是孙</h3>
        <p>{this.props.username}</p>
        <p>{this.props.age}</p>
        <h4>{this.props.id}</h4>
            </div>
        )
    }
}
