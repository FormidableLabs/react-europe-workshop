// @format
import React, {Component} from 'react';
import {Online, Offline} from './NetworkStatus.js';
import './App.css';

class App extends Component {
  onlineRef = React.createRef();

  componentDidMount() {
    console.log(this.onlineRef.current.updateNetworkStats);
  }

  render() {
    return (
      <div className="App">
        <h1>
          <Online ref={this.onlineRef}>
            Online with a <Online.ConnectionType /> connection.
            <br />
            Running at: <Online.ConnectionSpeed />
          </Online>
          <Offline>Where'd you go?!</Offline>
        </h1>
      </div>
    );
  }
}

export default App;
