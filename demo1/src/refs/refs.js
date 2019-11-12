import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import MixinLog from '../miaxin';
import Button from 'antd/es/button'


export default class refs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bodyheight: false
        }
    }
    componentDidMount() {
        console.log(this.refs);
    }
    onclick() {
        this.setState({
            bodyheight: !this.state.bodyheight
        })
        //    console.log( this.refs);
        MixinLog.log()
    }
    render() {
        const yangshi = {
            demo: {
                backgroundColor: (this.state.bodyheight) ? "#164872" : "#333333",
                color: "red",
                height: (this.state.bodyheight) ? "100px" : "200px",
                padding: (this.state.bodyheight) ? "10px" : "20px",
                border: "1px solid #339922"
            }
        }
        return (
            <div style={yangshi.demo}>
                <h1 ref="submenu">refs</h1>
                <button onClick={this.onclick.bind(this)}>console</button>
                <Button type="primary">Button</Button>
            </div>
        )
    }
}


ReactMixin(refs.prototype, MixinLog)