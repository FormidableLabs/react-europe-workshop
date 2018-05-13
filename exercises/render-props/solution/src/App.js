import React, { Component } from 'react';
import './App.css';

import Fetch from './Fetch';

class App extends Component {
  render() {
    return (
      <Fetch url="http://test.com">
        {({ loading, error, data }) => {
          if (error !== null) {
            console.log(error);
            return <p>Error {error}</p>;
          }
          return loading === true ? <p>Loading</p> : <p>{data}</p>;
        }}
      </Fetch>
    );
  }
}

export default App;
