import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './portal-app.css';

export class RegularModal extends Component {
  render() {
    return (
      <div className="regularModal">
        Hi I'm a regular modal!!
      </div>
    );
  }
};

export class PortalApp extends Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  render() {
    return (
      <div className="pageWrapper">
        <div className={`containerDiv lightTheme`}>
          <h1>Portals!!!!</h1>
          <div className="settingsButtonWrapper">
            <button className="settingsButton" onClick={this.toggleModal}>settings</button>
            {
              this.state.isModalOpen
              ? (
                  <RegularModal />
                )
              : null
            }
          </div>
          <p>Portals are great!</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
        </div>
      </div>
    );
  };
};

export default PortalApp;

