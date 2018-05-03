import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PortalApp from './portals/portal-app';


class Tabs extends Component {
  render() {
   return "Tabs"
  }
}

class App extends Component {
  render() {
    return (
      <div id="app-root">
        <PortalApp />
      </div>
    )
  }
}

export default App;
