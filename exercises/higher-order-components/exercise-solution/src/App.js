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
 * Also, `width` and `height` are pretty common prop names. What
 * happens if we wrap, say, an Icon component that takes its own
 * width/height props. Can you think of a solution around this?
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

import React, { Component } from "react";
import throttle from "lodash.throttle";
import hoistStatics from "hoist-non-react-statics";
import "./App.css";

function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component";
}

function withScreenDimensions(WrappedComponent, options = {}) {
  class ScreenDimensions extends Component {
    constructor() {
      super();
      this.state = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      if (options.throttle) {
        this.onResize = throttle(this.onResize, options.throttle);
      }
    }

    componentDidMount() {
      window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.onResize);
    }

    onResize = () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    render() {
      const { forwardRef, ...props } = this.props;
      const { width, height } = this.state;
      return (
        <WrappedComponent
          ref={forwardRef}
          {...props}
          screenDimensions={this.state}
        />
      );
    }
  }
  // Set a useful displayName on the HOC
  const displayName = getDisplayName(WrappedComponent);
  ScreenDimensions.displayName = `withScreenDimensions(${displayName})`;
  // Make sure any ref is forwarded to the right component
  const ForwardRef = React.forwardRef((props, ref) => (
    <ScreenDimensions {...props} forwardRef={ref} />
  ));
  // Hoist static methods
  hoistStatics(ForwardRef, WrappedComponent);
  return ForwardRef;
}

class App extends Component {
  static version = "4.2.0";
  render() {
    const { screenDimensions } = this.props;
    const { width, height } = screenDimensions;
    return (
      <div className="App">
        <h1>
          {width}px by {height}px
        </h1>
      </div>
    );
  }
}

export default withScreenDimensions(App, { throttle: 1000 });
