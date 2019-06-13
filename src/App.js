import React, { Component } from 'react';
import './App.css';
import Lottery from './Lottery';

class App extends Component {
  render() {
    return (
      <div className="centre">
        <Lottery />
        <Lottery title="Mini Daily" numBalls={4} maxNum={10} />
      </div>
    );
  }
}

export default App;
