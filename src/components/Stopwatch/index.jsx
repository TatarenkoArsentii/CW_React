import React, { Component } from "react";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
    this.timerId = null;
  }

  tick = () => {
    this.setState((state, props) => {
      return { time: state.time + 1 };
    });
  };

  reset = () => {
    this.setState({ time: 0 });
  };
  start = () => {
    this.timerId = setInterval(this.tick, 1000);
  };

  stop = () => {
    clearInterval(this.timerId);
    this.timerId = null;
  };

  componentDidMount() {
    this.start();
  }
  componentWillUnmount() {
    this.stop();
  }
  componentDidUpdate() {
    console.log("update");
  }

  render() {
    const { time } = this.state;
    return (
      <article>
        <h1>{time}</h1>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </article>
    );
  }
}

export default Stopwatch;
