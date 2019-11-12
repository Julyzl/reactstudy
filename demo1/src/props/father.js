import React, { Component } from 'react'
import Sonweb from './son'
// import style from '../App.css'

export default class father extends Component {
    constructor(props){
        super(props)
        this.state={
            age:0,
            username:"hzl"
        }
        // this.pastvoidtoson=this.pastvoidtoson.bind(this)
    }
    pastvoidtoson(e){
this.setState({age: e.target.value})
    }
    render() {
        // var Sonwen=<Sonweb/>
        return (
            <div>
                <h1>AGE:{this.state.age}</h1>
                <Sonweb pastvoid={this.pastvoidtoson.bind(this)}  username={this.state.username} age={this.state.age}/>
            </div>
        )
    }
}


