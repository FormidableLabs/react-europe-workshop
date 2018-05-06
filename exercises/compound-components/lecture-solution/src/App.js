import React, { Component } from "react";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation>
          <Navigation.Item to="/" label="Home" />
          <Navigation.Item to="/messages" label="Messages" />
          <Navigation.Item to="/notifications" label="Notification" />
          <Navigation.Split />
          <Logo />
          <Navigation.Split />
          <SearchBar />
          <Navigation.Item to="/profile" label="Profile" />
        </Navigation>
      </div>
    );
  }
}

export default App;
