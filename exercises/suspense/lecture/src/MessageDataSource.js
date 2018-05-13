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

  getData = () => {
    // Mock a cancelable Promise...
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve(this.messages);
        this._init();
      }, window.API_DELAY || 5000);
    });

    promise.cancel = () => {};
    return promise;
  };
}

export default new MessageDataSource();
