// Requires these props:
//  • label: Sets the text for the input's label
//  • id: sets the id property for the input and the <label for... attribute
//
// Uses these props:
//  • required: true or false, defaults to false. Adds required label, required attribute and aria-required='true'
//  • spellCheck: true or false, defaults to false. If true enables borwser autocorrection while typing
//  • errorMessage: string. If present triggers the error state and displays the error message


import React, { Component } from 'react';

export default class TextInput extends Component {
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

        <input
          id={this.props.id}
          name={this.props.id}
          type="text"
          className={this.state.isValid ? 'usa-input-success' : null}
          required={this.props.required}
          aria-required={this.props.required}
          onBlur={this._handleBlur.bind(this)}
          onChange={this._handleChange.bind(this)}
          ref={(input) => this._input = input}
          spellCheck={this.props.spellCheck ? true : false}
        />
      </div>
    );
  }

  _validateSSN() {
    //validates a SSN field - parses out '-' and veriries number length === 9
    let ssnNum = this._input.value,
        regexNumDashes = new RegExp("^\\d{3}-\\d{2}-\\d{4}$"),
        regexNum = new RegExp("^\\d{9}$");


    if ( this.props.id === 'ssn' ) {
      if ( !(regexNum.test(ssnNum)) && !(regexNumDashes.test(ssnNum)) ){
        this.setState({
          hasError: true,
          isValid: false,
          errorMessageBody: 'The SSN field requires 9 digits.'
        });

      } 
    }
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
    this._validateSSN();
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

TextInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  spellCheck: React.PropTypes.bool,
  errorMessage: React.PropTypes.string,
  maxLength: React.PropTypes.number
};

TextInput.defaultProps = {
  spellCheck: false,
  required: false
};
