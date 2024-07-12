import React, { Component } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './style.css';

let interval;

class Timer extends Component {
  constructor() {
    super()
    this.state = {
      second: 0,
      minute: 0,
      hour: 0,
      isStart: false
    }
  }

  handleStart = () => {
    if (this.state.isStart == false) {
      this.setState({
        isStart: true
      })
      interval = setInterval(() => {
        let sec = this.state.second
        let min = this.state.minute
        let hr = this.state.hour

        sec = sec + 1
        if(sec == 60){
          sec = 0
          min = min + 1
        }

        if(min == 60){
          min = 0 
          hr = hr + 1
        }

        this.setState({
          second: sec,
          minute: min,
          hour : hr
        })
      }, 1000)
    }
  }

  handleStop = () => {
    clearInterval(interval);
    this.setState({
      isStart: false
    })
  }

  handleReset = () => {
    this.handleStop()
    this.setState({
      second: 0,
      minute: 0,
      hour: 0
    })
  }

  render() {
    let hour = this.state.hour;
    let minute = this.state.minute;
    let second = this.state.second;


    return (
      <>
        <h2 className='timer'>
          {`${hour > 9 ? hour : '0' + hour} : ${minute > 9 ? minute : '0' + minute} : ${second > 9 ? second : '0' + second}`}
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <button onClick={this.handleStart}>start</button>
          &nbsp;
          <button onClick={this.handleStop}>stop</button>
          &nbsp;
          <button onClick={this.handleReset}>reset</button>
        </div>

      </>
    );
  }
}

export default Timer;