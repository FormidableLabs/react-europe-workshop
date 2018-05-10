import React, { Component } from "react";
import hoistStatics from "hoist-non-react-statics";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function withOnlineStatus(WrappedComponent) {
  class OnlineStatus extends Component {
    state = {
      isOnline: navigator.onLine
    };

    componentDidMount() {
      window.addEventListener("online", this.handleOnline);
      window.addEventListener("offline", this.handleOffline);
    }

    componentWillUnount() {
      window.removeEventListener("online", this.handleOnline);
      window.removeEventListener("offline", this.handleOffline);
    }

    handleOnline = () => {
      this.setState({ isOnline: true });
    };

    handleOffline = () => {
      this.setState({ isOnline: false });
    };
    render() {
      const { isOnline } = this.state;
      const { forwardRef, ...props } = this.props;
      return (
        <WrappedComponent ref={forwardRef} {...props} isOnline={isOnline} />
      );
    }
  }
  // Use a displayName that identifies this as a HOC
  OnlineStatus.displayName = `withOnlineStatus(${getDisplayName(
    WrappedComponent
  )})`;

  // Make sure all refs are forwarded to the right
  // component.
  function forwardRef(props, ref) {
    return <OnlineStatus {...props} forwardRef={ref} />;
  }

  // Also set the displayName on the forwardRef function,
  // which will cause the ForwardRef component to show
  // up as `ForwardRef(withOnlineStatus(Foo))`
  // in the devtools.
  forwardRef.displayName = OnlineStatus.displayName;

  const ForwardRef = React.forwardRef(forwardRef);

  // Hoist all non-React static methods from the
  // WrappedComponent. If you're using forwardRef, make
  // sure you hoist the statics to the component returned
  // by ForwardRef, not the component it wraps!
  hoistStatics(ForwardRef, WrappedComponent);
  return ForwardRef;
}

export const Online = withOnlineStatus(
  class Online extends Component {
    static ConnectionSpeed = () => {
      const { downlink } = navigator.connection;
      return <span>~{downlink}Mbp/s</span>;
    };

    static ConnectionType = () => {
      const { effectiveType } = navigator.connection;
      return <span>{effectiveType.toUpperCase()}</span>;
    };
    render() {
      const { isOnline, children } = this.props;
      return isOnline ? children : null;
    }
  }
);

export const Offline = withOnlineStatus(
  class Offline extends Component {
    render() {
      const { isOnline, children } = this.props;
      return isOnline ? null : children;
    }
  }
);
