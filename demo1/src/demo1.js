import React, { Component } from 'react'

export default class demo1 extends Component {
    
    render() {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
          <li>{number}</li>
        );
        return (
            <div>
                
            </div>
        )
    }
}
