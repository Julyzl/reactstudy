import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import Sunweb from './sun'

export default class Son extends Component {
    render() {
        return (
            <div>
                <h1>这是子组件</h1>
                <h2>输入值改变父组件的AGE</h2>
                <input type="text" onChange={this.props.pastvoid}/>


                <h1>这是子组件</h1>
                <h2>接收到父页面的值</h2>
        <p>NAME:{this.props.username}</p>
        <p>AGE:{this.props.age}</p>
<Sunweb {...this.props} id={66999}/>
            </div>
        )
    }
}
//对props传值类型进行约束
// Son.PropTypes={
//     age :  PropTypes.number
// }