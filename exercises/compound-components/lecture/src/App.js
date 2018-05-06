import React, { Component } from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";

// Compound components!
const navItems = [
  { to: "/", label: "Home" },
  { to: "/messages", label: "Messages" },
  { to: "/notifications", label: "Notifications" },
  { to: "/profile", label: "Profile" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation items={navItems} />
      </div>
    );
  }
}

export default App;
