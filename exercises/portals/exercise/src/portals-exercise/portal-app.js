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

// EXERCISES:
// 1. Create a portal-based tooltip for another click or hover target within the container div
// 2. Have it display info passed from the parent container or trigger an event in the parent container, or both
// 3. Bonus: Use a positioning library (see resources in the README for this folder) to position your tooltip instead of DOM measuring
// 4. Bonus: Feel free to get creative with styling, functionality, etc. - the only thing you can't do is change the parent container to allow visible overflow!

