import React, { Component } from "react";

export default class ChatFilterNavbar extends Component {
  state = {
    filter: ""
  };

  onFilterChange = event => {
    const { value } = event.target;
    this.setState({
      filter: value
    });
    this.props.onFilterChange(value);
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a style={{ color: "white" }} className="navbar-brand">
          Dad Jokes Chat
        </a>
        <form className="form-inline">
          <input
            className="form-control"
            type="search"
            placeholder="Filter Messages..."
            value={this.state.filter}
            onChange={this.onFilterChange}
          />
        </form>
      </nav>
    );
  }
}
