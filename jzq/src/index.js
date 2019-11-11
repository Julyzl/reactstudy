import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     // constructor(props) {
//     //     super(props)
//     //     this.state = {
//     //         value: null
//     //     }
//     // }
//     render() {
//         return (
//             <button className="square" 
//            onClick={() => { this.props.onClick()}}        
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

//重写Square组件，变成一个函数
function Square (props){
    return(
        <button className="square"
        onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

class Board extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         xisnext:true
    //     }
    // }

    renderSquare(i) {
        return <Square
         value={this.props.squares[i]}
         onClick={() => { this.props.onClick(i);
        // console.log(this.state.squares)
     }} 
         />;
    }

    render() {
        return (
            <div>
                {/* <div className="status">{status}</div> */}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            histroy:[{
               squares:Array(9).fill(null) 
            }],
            xisnext:true,
            stepNumber:0
        }
        
       
    }
    handleClick(i) {
        const histroy = this.state.histroy.slice(0,this.state.stepNumber+1);   //定义历史记录
        const current = histroy[histroy.length-1];  //返回上一次
        const squares = current.squares.slice();  //拼接
        if(calculateWinner(squares)||squares[i]){
            return
        }
        squares[i] = this.state.xisnext?'X':"O";
        this.setState({
            histroy: histroy.concat([{
                squares:squares
            }]),
            xisnext:!this.state.xisnext,
            stepNumber:histroy.length
        })
           
        console.log(this.state.histroy)
      }
      jumpto(step){
          this.setState({
              stepNumber:step,
              xisnext:(step % 2) === 0,
          })
      }
    render() {
        const histroy = this.state.histroy;   //定义历史记录
        const current = histroy[this.state.stepNumber];  //返回上一次
        const winner  = calculateWinner(current.squares)

      const moves=histroy.map((step,move) =>{
        const desc =move ? `返回上一次${move}`:`重新开始`;
        return (
            <li key={move}>
      <button onClick={()=>{this.jumpto(move)}}>{desc}</button>
            </li>
        )
      })

        let  status;
        if(winner){
            status=`获胜者是${winner}`
        }else{
            status = `下一个棋手是: '${this.state.xisnext?"X":"O"}`;
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board  
                    squares={current.squares}
                    onClick={(i)=>{this.handleClick(i)}}/>
                </div>
                <div className="game-info">
        <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }