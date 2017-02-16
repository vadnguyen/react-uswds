// Requires these props:
//  • label: Sets the text for the input's label
//  • id: sets the id property for the input and the <label for... attribute
//


import React, { Component } from 'react';

export default class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPristine: true,
      isValid: false,
      hasError: false,
      errorMessageBody : null
    };
  }

  componentWillMount() {
    if (this.props.errorMessage) {
      this.setState({
        isPristine: true,
        isValid: false,
        hasError: true,
        errorMessageBody: this.props.errorMessage
      })
    }
  }


  render() {
    let errorMessage;

    if (this.state.hasError) {
      errorMessage = (
        <span className="usa-input-error-message" role="alert">{this.state.errorMessageBody}</span>
      );
    } else {
      errorMessage = null;
    }

    return (
      <div className={this.state.hasError ? 'usa-input-error' : 'usa-input'}>
        <label className={this.props.required ? 'usa-input-required' : null} htmlFor={this.props.id}>
          {this.props.label}
        </label>

        {errorMessage}

        <textarea
          id={this.props.id}
          name={this.props.id}
          required={this.props.required}
          aria-required={this.props.required}
          onBlur={this._handleBlur.bind(this)}
          onChange={this._handleChange.bind(this)}
          ref={(input) => this._input = input}
        ></textarea>
      </div>
    );
  }


  _validate() {
    // First check to see if field is required and empty
    if (this.props.required && !this._input.value) {
      this.setState({
        hasError: true,
        isValid: false,
        errorMessageBody: 'This field is required'
      });
    }
    // If validator(s) were sent as a prop, test them first
    else if (this.props.validation) {
      for (let i = 0; i < this.props.validation.length; i += 1) {
        if (!this.props.validation[i].regex.test(this._input.value)) {
          this.setState({
            hasError: true,
            isValid: false,
            errorMessageBody: this.props.validation[i].message
          });
          break;
        } else {
          this.setState({
            hasError: false,
            isValid: true
          });
        }
      }
    }
    // Field must not have an error
    else {
      this.setState({
        hasError: false,
        // isValid: true,
        errorMessageBody: null
      });
    }
  }


  _handleBlur() {
    if ((this.props.required || this.props.validation) && !this.state.isPristine) {
      this._validate();
    }
  }

  _handleChange() {
    if (this._input.value) {
      this.setState({isPristine: false});
    }

    if (this.state.hasError) {
      this._validate();
    }
  }
}

TextArea.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
};
