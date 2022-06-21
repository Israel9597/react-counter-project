import React, { Component } from "react";

import "./App.css";
import Second from "./components/second";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 10 },
      { id: 2, value: 6 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counter: counters });
  };
  handleDelete = (itemId) => {
    const result = this.state.counter.filter((c) => c.id !== itemId);
    this.setState({ counter: result });
  };
  handleReset = () => {
    const counters = this.state.counter.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter: counters });
  };
  handleDecrement = (item) => {
    const decrement = [...this.state.counter];
    const index = decrement.indexOf(item);
    decrement[index] = { ...item };
    decrement[index].value--;
    this.setState({ counter: decrement });
  };

  render() {
    return (
      <div>
        <NavBar
          totalCounters={this.state.counter.filter((c) => c.value > 0).length}
        />
        <Second
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          counters={this.state.counter}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default App;
