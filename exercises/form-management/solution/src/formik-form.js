// Formik

import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

import "./formik-form.css";

export class Content extends Component {
  renderTechnologyList = submission => {
    // if you had a lot of data or wanted this to be dynamic you'd handle it differently
    // but this works fine for our basic use case!
    const technologies = [
      "react",
      "redux",
      "formik",
      "graphQL",
      "node",
      "reactNative"
    ];

    // map through the technology array to see which ones exist as `true` within the submission object
    return technologies.map(technology => {
      if (submission[technology]) {
        return (
          <div key={`${technology}-${submission.name}`}>
            Has used <span className="techSpan">{technology}</span>
          </div>
        );
      }

      return null;
    });
  };

  renderSubmissions = submissions => {
    return submissions.map(submission => {
      return (
        <div key={submission.name} className="submission">
          <div style={{ fontWeight: "bold" }}>{submission.name}</div>
          {this.renderTechnologyList(submission)}
          <div>
            This is {submission.firstVisit === "no" && "not"} their first time
            in Paris
          </div>
        </div>
      );
    });
  };

  render() {
    const { submissions } = this.props;

    // if there are any submissions in the submissions array, display results! otherwise, display the filler content
    return (
      <div className="contentWrapper">
        {submissions.length
          ? this.renderSubmissions(submissions)
          : "We want to put form info here!"}
      </div>
    );
  }
}

export default class FormikForm extends Component {
  constructor() {
    super();
    this.state = {
      submissions: []
    };
  }

  // a nice, simple submit method - and no hand-rolled change handlers necessary!
  handleSubmit = submission => {
    this.setState({
      submissions: this.state.submissions.concat(submission)
    });
  };

  render() {
    return (
      <div className="pageWrapper">
        <div className="formWrapper">
          <Formik
            onSubmit={(values, actions) => {
              this.handleSubmit(values);
              actions.resetForm();
            }}
            initialValues={{
              name: "",
              firstVisit: "yes",
              react: false,
              redux: false,
              formik: false,
              graphQL: false,
              node: false,
              reactNative: false
            }}
            /* We're using Formik with Render Props, but it can also be used as an HOC as withFormik(options) */
            render={({ handleChange, values }) => {
              return (
                <Form className="form">
                  <div>
                    <label htmlFor="name">What's your name?</label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      onChange={handleChange}
                      value={values.name}
                      required
                    />
                  </div>
                  <p>Which of the following technologies have you used?</p>
                  <div>
                    {/** We're using the handleChange method passed by Formik, which eliminates the need to manually track changes */}
                    <Field
                      type="checkbox"
                      id="react"
                      name="react"
                      value="react"
                      onChange={handleChange}
                      checked={values.react}
                    />
                    <label htmlFor="react">React</label>
                  </div>
                  <div>
                    <Field
                      type="checkbox"
                      id="redux"
                      name="redux"
                      value="redux"
                      onChange={handleChange}
                      checked={values.redux}
                    />
                    <label htmlFor="redux">Redux</label>
                  </div>
                  <div>
                    <Field
                      type="checkbox"
                      id="formik"
                      name="formik"
                      value="formik"
                      onChange={handleChange}
                      checked={values.formik}
                    />
                    <label htmlFor="formik">Formik</label>
                  </div>
                  <div>
                    <Field
                      type="checkbox"
                      id="graphQL"
                      name="graphQL"
                      value="graphQL"
                      onChange={handleChange}
                      checked={values.graphQL}
                    />
                    <label htmlFor="graphQL">GraphQL</label>
                  </div>
                  <div>
                    <Field
                      type="checkbox"
                      id="node"
                      name="node"
                      value="node"
                      onChange={handleChange}
                      checked={values.node}
                    />
                    <label htmlFor="node">Node</label>
                  </div>
                  <div>
                    <Field
                      type="checkbox"
                      id="reactNative"
                      name="reactNative"
                      value="reactNative"
                      onChange={handleChange}
                      checked={values.reactNative}
                    />
                    <label htmlFor="reactNative">ReactNative</label>
                  </div>
                  {/** A possible solution for the solo exercise */}
                  <div style={{ margin: "10px 0" }}>
                    <p>Is this your first visit to Paris?</p>
                    <Field component="select" name="firstVisit">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Field>
                  </div>
                  {/** ***************************************** */}
                  <button className="submitButton" type="submit">
                    Submit Form
                  </button>
                </Form>
              );
            }}
          />
        </div>
        <Content submissions={this.state.submissions} />
      </div>
    );
  }
}
