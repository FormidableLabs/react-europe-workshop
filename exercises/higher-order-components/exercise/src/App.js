/**
 * Higher-Order Component Exericse:
 *
 * The App component dynamically renders the current window
 * dimensions. Implement a `withScreenDimensions` higher-order
 * component and refactor App to use that instead.
 *
 * Make sure that the `withScreenDimensions` HOC:
 *
 * 1. Sets a helpful displayName
 * 2. Works with components that have static properties
 * 3. Can forward refs to the component its wrapping
 *
 *     ============================
 *     ====== STRETCH GOAL! =======
 *     ============================
 * 
 * Some consumers of the `withScreenDimensions` HOC might want to
 * avoid re-rendering for EVERY window resize event. Add a way
 * to pass in a `throttle` option and, if it exists, throttle
 * the resize event listener at the provided rate.
 *
 * 
 */

import React, {Component} from 'react';
// Hmmm, maybe this will be useful?
// import hoistStatics from 'hoist-non-react-statics'
import './App.css';
// Uncomment if you're hitting the stretch goal
// import throttle from 'lodash.throttle'

class App extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  render() {
    const {width, height} = this.state;
    return (
      <div className="App">
        <h1>
          {width}px by {height}px
        </h1>
      </div>
    );
  }
}

export default App;
