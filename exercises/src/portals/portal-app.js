import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './portal-app.css';

export class PortalModal extends Component {
  constructor() {
    super();

    this.portalElement = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.portalElement);
  }

  componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  }

  render() {
    const { coordinates } = this.props;

    return ReactDOM.createPortal(
      <div className="portalModal" style={{left: `${coordinates.x}px`, top: `${coordinates.y}px`}}>
        Select the theme for the parent component:
        <form>
          <input type="radio" id="theme1"
            name="theme" value="lightTheme" />
          <label htmlFor="theme1">Light Theme</label>
          <input type="radio" id="theme2"
            name="theme" value="darkTheme" />
          <label htmlFor="theme2">Dark Theme</label>
        </form>
      </div>,
      this.portalElement
    );
  }
};

// export class RegularModal extends Component {
//   render() {
//     return (
//       <div className="regularModal">
//         Hi I'm a regular modal!!
//       </div>
//     );
//   }
// };

export class PortalApp extends Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false,
      containerTheme: 'lightTheme',
      modalCoordinates: {}
    };
  }

  componentDidMount() {
    this.getModalCoordinates();
  }

  getModalCoordinates() {
    if (this.buttonWrapper) {
      const boundingRect = this.buttonWrapper.getBoundingClientRect();

      this.setState({
        modalCoordinates: {
          x: boundingRect.left,
          // adding whatever padding we want to the bottom coordinate
          y: boundingRect.bottom + 10
        }
      })
    }
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  handleChangeTheme = e => {
    this.setState({
      containerTheme: e.target.value
    }, () => {
      this.setState({
        isModalOpen: false
      })
    });
  };

  render() {
    return (
      <div className="pageWrapper">
        <div className={`containerDiv ${this.state.containerTheme}`} onChange={this.handleChangeTheme}>
          <h1>Portals!!!!</h1>
          <div className="buttonWrapper" ref={el => { this.buttonWrapper = el }}>
            <button className="settingsButton" onClick={this.toggleModal}>settings</button>
            {
              this.state.isModalOpen
              ? (
                  <PortalModal
                    coordinates={this.state.modalCoordinates}
                  />
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
// 4. Feel free to get creative with styling, functionality, etc. - the only thing you can't do is change the parent container to allow visible overflow!

