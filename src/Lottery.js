import React, { Component } from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css';

export default class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  };
  constructor(props) {
    super(props);
    let arr = [];
    for (let i = 0; i < this.props.numBalls; i++) {
      arr.push(this.randGen());
    }
    this.state = { nums: [...arr] };
    this.numGen = this.numGen.bind(this);
    this.printer = this.printer.bind(this);
  }
  randGen = () => Math.floor(Math.random() * this.props.maxNum) + 1;

  numGen() {
    let arr = [];
    for (let i = 0; i < this.props.numBalls; i++) {
      arr.push(this.randGen());
    }
    // console.log(arr);
    this.setState({ nums: [...arr] });
    // console.log(this.state);
  }

  printer() {}
  render() {
    var numArray = this.state.nums;

    return (
      <div className="lottery">
        <h2>{this.props.title}</h2>
        <div>
          {numArray.map(num => {
            return <LotteryBall num={num} />;
          })}
        </div>
        <div>
          <button onClick={this.numGen}>Refresh!!!</button>
        </div>
      </div>
    );
  }
}
