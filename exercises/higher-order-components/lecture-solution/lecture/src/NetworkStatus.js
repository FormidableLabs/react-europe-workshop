import React, {Component} from 'react';
import hoistStatics from 'hoist-non-react-statics';

function withOnlineStatus(WrappedComponent) {
  class OnlineStatus extends Component {
    state = {
      isOnline: navigator.onLine,
    };

    componentDidMount() {
      window.addEventListener('online', this.handleOnline);
      window.addEventListener('offline', this.handleOffline);
    }

    componentWillUnount() {
      window.removeEventListener('online', this.handleOnline);
      window.removeEventListener('offline', this.handleOffline);
    }

    handleOnline = () => {
      this.setState({isOnline: true});
    };

    handleOffline = () => {
      this.setState({isOnline: false});
    };

    render() {
      const {forwardRef, ...props} = this.props;
      return (
        <WrappedComponent
          ref={forwardRef}
          {...props}
          isOnline={this.state.isOnline}
        />
      );
    }
  }
  // Use a common HOC displayName pattern
  // prettier-ignore
  OnlineStatus.displayName = `withOnlineStatus(${
    WrappedComponent.displayName ||
    WrappedComponent.name
  })`;

  function forwardRef(props, ref) {
    return <OnlineStatus {...props} forwardRef={ref} />
  }

  forwardRef.displayName = OnlineStatus.displayName; 

  // React.forwardRef creates a new component
  const Forwarded = React.forwardRef(forwardRef);
  // Make sure to hoist statics onto the component
  // that React.forwardRef returns, since that's whats
  // being rendered.
  hoistStatics(Forwarded, WrappedComponent);
  return Forwarded;
}

export const Online = withOnlineStatus(
  class Online extends Component {
    static ConnectionSpeed = () => {
      const {downlink} = navigator.connection;
      return <span>~{downlink}Mbp/s</span>;
    };

    static ConnectionType = () => {
      const {effectiveType} = navigator.connection;
      return <span>{effectiveType.toUpperCase()}</span>;
    };

    updateNetworkStats() {
      window.alert('Updating network stats...');
    }

    render() {
      const {isOnline} = this.props;
      return isOnline ? this.props.children : null;
    }
  },
);

export const Offline = withOnlineStatus(
  class Offline extends Component {
    render() {
      const {isOnline} = this.props;
      return isOnline ? null : this.props.children;
    }
  },
);
