import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = formProps => {
    console.log(formProps);
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;

    // this takes all the properties of formProps.input and adds it to the input element
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <div className="ui input focus">
          <input {...formProps.input} />
        </div>
        {this.renderError(formProps.meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui primary button">Submit</button>
      </form>
    );
    // NOTE: Since the Field element does not recognize label , it will take label
    // and pass it as prop to the renderInput

    // NOTE:no need to call preventDefault inside onSubmit(), nor pass event as a argument to onSubmit
    // handleSubmit takes care of all the above things
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    // below mentioned key should be same as the Field name
    errors.title = "You must Enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must Enter a description";
  }
  return errors;
};

// NOTE:  to use connect and clean up the code we wrap our form in a const and use it with connect
const formWrapped = reduxForm({
  form: "createStream",
  validate: validate
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(formWrapped);
