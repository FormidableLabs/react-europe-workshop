import "./App.css";
import dadJokes from "@mikemcbride/dad-jokes";
import Chance from "chance";

const chance = new Chance();

class MessageDataSource {
  constructor() {
    this.messages = Array.from({ length: 6 }, this._createMessage);
    this.subscribers = [];
    this._initialized = false;
    this._getDataTimeout = null;
  }

  _init = () => {
    const message = this._createMessage();
    this.subscribers.forEach(fn => fn(message));
    const timeout = 1000 + Math.round(Math.random() * 500);
    setTimeout(this._init, timeout);
    this._initialized = true;
  };

  _createMessage = () => {
    const author = chance.name();
    const message = dadJokes.random();
    const id = Math.random();
    return { author, message, id };
  };

  subscribe = fn => {
    this.subscribers.push(fn);
    return () => {
      const subscribers = this.subscribers;
      this.subscribers = subscribers.filter(subscriber => subscriber !== fn);
    };
  };

  getData() {
    // Mock a cancelable Promise...
    const cancel = () => {
      if (this._getDataTimeout !== null) {
        clearTimeout(this._getDataTimeout);
        this._getDataTimeout = null;
      }
    };
    const then = callback => {
      this._getDataTimeout = setTimeout(() => {
        this._getDataTimeout = null;
        callback(this.messages);
        this._init();
      }, 2000);
      return {
        cancel
      };
    };
    return {
      then
    };
  }
}

export default new MessageDataSource();
