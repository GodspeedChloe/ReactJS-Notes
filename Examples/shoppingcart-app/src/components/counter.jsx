import React, { Component } from "react";

export default class Counter extends Component {
  getBadgeClasses() {
    let bad = "badge m-2 bg-";
    bad += this.props.counter.value === 0 ? "warning" : "primary";
    return bad;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}
