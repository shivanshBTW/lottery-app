import React, { Component } from 'react';

export default class ClickButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randNum: 1
    };
    this.randGen = this.randGen.bind(this);
  }
  randGen() {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({ randNum: rand });
  }
  render() {
    return (
      <div>
        <p>Number is {this.state.randNum}</p>
        <p>
          {this.state.randNum === 7 ? (
            <span>You Win!!!</span>
          ) : (
            <button onClick={this.randGen}>Random Number</button>
          )}
        </p>
      </div>
    );
  }
}
