import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PortalCodealong from './portals/codealong';


class Tabs extends Component {
  render() {
   return "Tabs"
  }
}

class App extends Component {
  render() {
    return (
      <div id="app-root">
        <PortalCodealong />;
      </div>
      <div id="portal-root" />
    )
  }
}

export default App;
