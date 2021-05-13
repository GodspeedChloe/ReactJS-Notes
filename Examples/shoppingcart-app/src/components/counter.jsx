import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDelete = (product) => {
    if (this.state.value >= 1) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  getBadgeClasses() {
    let bad = "badge m-2 bg-";
    bad += this.state.value === 0 ? "warning" : "primary";
    return bad;
  }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.handleDelete({ id: this.props.id })}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}
