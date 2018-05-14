import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const {count} = this.state;
    return (
      <div className="App">
        <h1>Current Count: {count}</h1>
        <button
          className="btn"
          onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default App;
