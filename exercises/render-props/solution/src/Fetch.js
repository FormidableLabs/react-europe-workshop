import React, { Component } from 'react';

class Fetch extends Component {
  state = {
    loading: true,
    error: null,
    data: null,
  };
  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data,
          loading: false,
        });
      })
      .catch(err => {
        this.setState({
          error: err,
          loading: false,
        });
      });
  }
  render() {
    return this.props.children(this.state);
  }
}

export default Fetch;
