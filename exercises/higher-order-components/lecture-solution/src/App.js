// @format
import React, {Component} from 'react';
import './App.css';

const withOnlineStatus = WrappedComponent => {
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
      return (
        <WrappedComponent
          ref={this.props.forwardRef}
          {...this.props}
          isOnline={this.state.isOnline}
        />
      );
    }
  }

  return React.forwardRef((props, ref) => (
    <OnlineStatus {...props} forwardRef={ref} />
  ));
};

const App = ({isOnline}) => {
  return (
    <div className="App">
      <h1>
        {isOnline ? (
          <span>Nice internet you've got there 🤩 </span>
        ) : (
          <span>Where'd you go? 💔</span>
        )}
      </h1>
    </div>
  );
};
export default withOnlineStatus(App);
