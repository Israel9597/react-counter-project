import React, { Component } from "react";

class First extends Component {
  render() {
    return (
      <div>
        <span style={this.getBadge()}>{this.formatCounter()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)}>
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
        >
          {" "}
          Decrement
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }
  getBadge() {}
  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default First;
