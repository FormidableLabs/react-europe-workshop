import React, { Component } from "react";

export class Online extends Component {
  static ConnectionSpeed = () => {
    const { downlink } = navigator.connection;
    return <span>~{downlink}Mbp/s</span>;
  };

  static ConnectionType = () => {
    const { effectiveType } = navigator.connection;
    return <span>{effectiveType.toUpperCase()}</span>;
  };
  state = {
    isOnline: navigator.onLine
  };

  componentDidMount() {
    window.addEventListener("online", this.handleOnline);
    window.addEventListener("offline", this.handleOffline);
  }

  componentWillUnount() {
    window.removeEventListener("online", this.handleOnline);
    window.removeEventListener("offline", this.handleOffline);
  }

  handleOnline = () => {
    this.setState({ isOnline: true });
  };

  handleOffline = () => {
    this.setState({ isOnline: false });
  };

  render() {
    const { isOnline } = this.state;
    return isOnline ? this.props.children : null;
  }
}

export class Offline extends Component {
  static ConnectionSpeed = () => {
    const { downlink } = navigator.connection;
    return <span>~{downlink}Mbp/s</span>;
  };

  static ConnectionType = () => {
    const { effectiveType } = navigator.connection;
    return <span>{effectiveType.toUpperCase()}</span>;
  };
  state = {
    isOnline: navigator.onLine
  };

  componentDidMount() {
    window.addEventListener("online", this.handleOnline);
    window.addEventListener("offline", this.handleOffline);
  }

  componentWillUnount() {
    window.removeEventListener("online", this.handleOnline);
    window.removeEventListener("offline", this.handleOffline);
  }

  handleOnline = () => {
    this.setState({ isOnline: true });
  };

  handleOffline = () => {
    this.setState({ isOnline: false });
  };

  render() {
    const { isOnline } = this.state;
    return isOnline ? null : this.props.children;
  }
}
