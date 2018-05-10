// @format
import React, {Component} from 'react';
import {Online, Offline} from './NetworkStatus.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <Online>
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
