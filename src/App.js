import React, { Component } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './style.css';

import Hello from './Hello';
import Timer from './Time';

var interval;


class App extends Component {

  constructor() {
    super()
    this.state = {
      title: 'سلام',
      number: 15
    }
  }


  handleStop = () => {
    clearInterval(interval)
  }

  render() {
    return (
      <div className="main">
        <Hello num={this.state.number} />
        <Timer/>
      </div>
    )
  }
}

export default App;