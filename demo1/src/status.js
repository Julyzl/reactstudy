import React, { Component } from 'react'

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

export default class status extends Component {
    constructor(props){
        super(props)
        this.state={
            temper:0
        }
        this.handlechang=this.handlechang.bind(this)
    }
    handlechang(e){
        let o={}
        o[e.target.name]=e.target.value;
        this.setState(o)
        console.log(this.state);
        // let o ={}
        // o[event.target.name]=event.target.value
        // this.setState(o)
    }
    render() {
        const parseloft=parseFloat(this.state.temper) 
        return (
            <div>
         <input type="text" name="temper" onChange={this.handlechang}/>    
              <BoilingVerdict  celsius={parseloft}/>
            </div>
        )
    }
}
