import React, { Component } from "react";
// import { Formik } from 'formik';

import "./formik-form.css";

export class Content extends Component {
  render() {
    return <div className="contentWrapper">We want to put form info here!</div>;
  }
}

export default class FormikForm extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      react: false,
      redux: false,
      formik: false,
      graphQL: false,
      node: false,
      reactNative: false
    };
  }

  handleSubmit = () => {
    console.log("submitted!");
  };

  // we'd also have to have several onChange handlers and, of course, a more useful submit method!

  render() {
    return (
      <div className="pageWrapper">
        <div className="formWrapper">
          <form className="form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">What's your name?</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <p>Which of the following technologies have you used?</p>
              <div>
                <input type="checkbox" id="react" name="react" value="react" />
                <label htmlFor="react">React</label>
              </div>
              <div>
                <input type="checkbox" id="redux" name="redux" value="redux" />
                <label htmlFor="redux">Redux</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="formik"
                  name="formik"
                  value="formik"
                />
                <label htmlFor="formik">Formik</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="graphQL"
                  name="graphQL"
                  value="graphQL"
                />
                <label htmlFor="graphQL">GraphQL</label>
              </div>
              <div>
                <input type="checkbox" id="node" name="node" value="node" />
                <label htmlFor="node">Node</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="reactNative"
                  name="reactNative"
                  value="reactNative"
                />
                <label htmlFor="reactNative">ReactNative</label>
              </div>
            </div>
            <button className="submitButton" type="submit">
              Submit Form
            </button>
          </form>
        </div>
        <Content />
      </div>
    );
  }
}
