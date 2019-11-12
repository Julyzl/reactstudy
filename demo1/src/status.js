import React, { Component } from 'react'
// import { ReactComponent } from '*.svg';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

// export default class status extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             temper:0
//         }
//         this.handlechang=this.handlechang.bind(this)
//     }
//     handlechang(e){
//         let o={}
//         o[e.target.name]=e.target.value;
//         this.setState(o)
//         console.log(this.state);
//         // let o ={}
//         // o[event.target.name]=event.target.value
//         // this.setState(o)
//     }
//     render() {
//         const parseloft=parseFloat(this.state.temper) 
//         return (
//             <div>
//          <input type="text" name="temper" onChange={this.handlechang}/>    
//               <BoilingVerdict  celsius={parseloft}/>
//             </div>
//         )
//     }
// }


//温度转换

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  //转换初值
  function tryConvert(input,output){
          input=parseFloat(input)
          if(Number.isNaN(input)){
              return ''
          }
          output=output(input);
          const rounded=Math.round(output*1000)/1000
          return rounded.toString()
  }

 class Temperinput extends Component {
    constructor(props) {
        super(props);
        this.handlechang = this.handlechang.bind(this);
      }
     handlechang(e){
        //  let o={}
        //  o[e.target.name]=e.target.value;
        //  this.setState(o)
        // this.setState({temper: e.target.value});
        console.log(this.props);
        this.props.onTemperatureChange(e.target.value);
     }
    render() {
        const temper =this.props.temper
        const scale =this.props.scale
        return (
            <div>
    <legend>temper:{scale}</legend>
                <input type="text" value={temper} onChange={this.handlechang}/>
            </div>
        )
    }
}

const temperlist={
    S:"Celsius",
    F:"Fahrenheit"
}

export default class status extends Component {
    constructor(props){
        super(props)
        this.state={
            temper:"",
            scale:"c"
        }
        this.handleC=this.handleC.bind(this)
        this.handleF=this.handleF.bind(this)

    }
    handleC(temper){
        this.setState({scale: 'c', temper});
    }
    handleF(temper){
        this.setState({scale: 'f', temper});
    }
    render() {
        const scale = this.state.scale;
    const temperature = this.state.temper;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
         <Temperinput  temper={celsius} scale={temperlist.S} onTemperatureChange={this.handleC}/>
         <Temperinput  temper={fahrenheit}  scale={temperlist.F} onTemperatureChange={this.handleF}/>
         <BoilingVerdict celsius={celsius}/>
            </div>
        )
    }
}
