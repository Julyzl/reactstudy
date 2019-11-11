import React, { Component } from 'react'
//表单双向绑定
export default class form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: " "
        }
        this.handlechang=this.handlechang.bind(this)
        this.onsunbmit=this.onsunbmit.bind(this)
    }
    handlechang(event){
        // const target= event.target
        // const name=target.name
        let o ={}
        o[event.target.name]=event.target.value
        this.setState(o)
       
    }
    onsunbmit(e){
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onsunbmit}>
                    <label>
                        名字:
    <input type="text" name="name" onChange={this.handlechang} />
    <input type="text" name="age" onChange={this.handlechang} />

                    </label>
                    <input type="submit" value="提交"  />
                </form>
            </div>
        )
    }
}
