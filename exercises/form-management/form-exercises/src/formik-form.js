import React, { Component, Fragment } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

import './formik-form.css';

export class Content extends Component {
  renderTechnologyList = submission => {
    const technologies = ['react', 'redux', 'formik', 'graphQL', 'node', 'reactNative'];

    return technologies.map(technology => {
      if (submission[technology]) {
        return <div key={`${technology}-${submission.name}`}>Has used <span className="techSpan">{technology}</span></div>
      }

      return null;
    })
  };

  renderSubmissions = submissions => {
    return submissions.map(submission => {
      return (
        <div key={submission.name} className="submission">
          <div style={{ fontWeight: 'bold' }}>{submission.name}</div>
          {this.renderTechnologyList(submission)}
          <div>This is {submission.firstVisit === 'no' && 'not'} their first time in Paris</div>
        </div>
      )
    });
  };

  render() {
    const { submissions } = this.props;

    return <div className="contentWrapper">{submissions.length ? this.renderSubmissions(submissions)  : 'We want to put form info here!'}</div>
  };
};

export default class FormikForm extends Component {
  constructor() {
    super();
    this.state = {
      submissions: []
    }
  };

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
              name: '',
              firstVisit: 'yes',
              react: false,
              redux: false,
              formik: false,
              graphQL: false,
              node: false,
              reactNative: false
            }}
            render={({ handleChange, values }) => {
              return (
                <Form className="form">
                  <div>
                    <label htmlFor="name">What's your name?</label>
                    <Field type="text" id="name" name="name" placeholder="Name" onChange={handleChange} value={values.name} required />
                  </div>
                    <p>Which of the following technologies have you used?</p>
                    <div>
                      <Field type="checkbox" id="react" name="react" value="react" onChange={handleChange} checked={values.react} />
                      <label htmlFor="react">React</label>
                    </div>
                    <div>
                      <Field type="checkbox" id="redux" name="redux" value="redux" onChange={handleChange} checked={values.redux} />
                      <label htmlFor="redux">Redux</label>
                    </div>
                    <div>
                      <Field type="checkbox" id="formik" name="formik" value="formik" onChange={handleChange} checked={values.formik} />
                      <label htmlFor="formik">Formik</label>
                    </div>
                    <div>
                      <Field type="checkbox" id="graphQL" name="graphQL" value="graphQL" onChange={handleChange} checked={values.graphQL} />
                      <label htmlFor="graphQL">GraphQL</label>
                    </div>
                    <div>
                      <Field type="checkbox" id="node" name="node" value="node" onChange={handleChange} checked={values.node} />
                      <label htmlFor="node">Node</label>
                    </div>
                    <div>
                      <Field type="checkbox" id="reactNative" name="reactNative" value="reactNative" onChange={handleChange} checked={values.reactNative} />
                      <label htmlFor="reactNative">ReactNative</label>
                    </div>
                    <div style={{ margin: '10px 0'}}>
                      <p>Is this your first visit to Paris?</p>
                      <Field component="select" name="firstVisit">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </Field>
                    </div>
                  <button className="submitButton" type="submit">Submit Form</button>
                </Form>
              )
            }}
          />
        </div>
        <Content submissions={this.state.submissions} />
      </div>
    )
  };
};

// import React, { Component } from 'react';
// // import { Formik } from 'formik';

// import './formik-form.css';

// export class Content extends Component {
//   render() {
//     return <div className="contentWrapper">We want to put form info here!</div>
//   };
// };

// export default class FormikForm extends Component {
    // constructor() {
    //   super();

    //   this.state = {
    //     input: '',
    //     react: false,
    //     redux: false,
    //     formik: false,
    //     graphQL: false,
    //     node: false,
    //     reactNative: false
    //   }
    // }
//
//   handleSubmit = () => {
//     console.log('submitted!');
//   }

//   render() {
//     return (
//       <div className="pageWrapper">
//         <div className="formWrapper">
//           <form className="form" onSubmit={this.handleSubmit}>
//             <div>
//               <label htmlFor="name">What's your name?</label>
//               <input type="text" id="name" name="name" />
//             </div>
//             <div>
//               <p>Which of the following technologies have you used?</p>
//               <div>
//                 <input type="checkbox" id="react" name="react" value="react" />
//                 <label htmlFor="react">React</label>
//               </div>
//               <div>
//                 <input type="checkbox" id="redux" name="redux" value="redux" />
//                 <label htmlFor="redux">Redux</label>
//               </div>
//               <div>
//                 <input type="checkbox" id="formik" name="formik" value="formik" />
//                 <label htmlFor="formik">Formik</label>
//               </div>
//               <div>
//                 <input type="checkbox" id="graphQL" name="graphQL" value="graphQL" />
//                 <label htmlFor="graphQL">GraphQL</label>
//               </div>
//               <div>
//                 <input type="checkbox" id="node" name="node" value="node" />
//                 <label htmlFor="node">Node</label>
//               </div>
//               <div>
//                 <input type="checkbox" id="reactNative" name="reactNative" value="reactNative" />
//                 <label htmlFor="reactNative">ReactNative</label>
//               </div>
//             </div>
//             <button className="submitButton" type="submit">Submit Form</button>
//           </form>
//         </div>
//         <Content />
//       </div>
//     )
//   };
// };

// Exercises:
// 1. Create an additional form field element that's controlled by the formik component and renders nicely to the list - use a component we haven't already, like
// a select dropdown, radio button group, etc.

