import React, { Component } from "react";
import First from "./first";
class Second extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;
    return (
      <div>
        <button onClick={onReset}>Reset</button>
        {counters.map((counter) => (
          <First
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Second;
