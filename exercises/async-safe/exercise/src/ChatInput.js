import React, { Component } from "react";

export default class ChatInput extends Component {
  /**
   * FIX ME
   * componentWillReceiveProps may get called multiple
   * times for a single update. If you perform side
   * effects in this method, they may get triggered
   * more than once.
   *
   * There's a commit phase lifecycle that's called
   * when a component is updated. Refactor this
   * to use that lifecycle instead.
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      localStorage.setItem("pendingMessage", nextProps.value);
    }
  }

  render() {
    const { value, onChange, onSubmit } = this.props;
    return (
      <React.Fragment>
        <div className="input-group mb-3">
          <input
            style={{ height: 70 }}
            type="text"
            className="form-control"
            placeholder="Enter a message..."
            value={value}
            onChange={onChange}
          />
          <div className="input-group-append">
            <button
              onClick={onSubmit}
              className="btn btn-success"
              type="button"
            >
              Button
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
