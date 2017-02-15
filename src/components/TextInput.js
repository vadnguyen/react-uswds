// Requires these props:
//  • id
//  • label
//
// If required is true, adds required attribute and aria-required='true'

import React, { Component } from 'react';

export default class TextInput extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      errorMessageBody : null
    };

  }


  render() {
    let errorMessage;
    let labelClass;

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


  _validate() {
    for (let i = 0; i < this.props.validation.length; i += 1) {
      if (!this.props.validation[i].regex.test(this._input.value)) {
        this.setState({
          hasError: true,
          errorMessageBody: this.props.validation[i].message
        });
        break;
      } else {
        this.setState({hasError: false});
      }
    }
  }


  _handleBlur() {
    if (this.props.required && !this._input.value) {
      this.setState({
        hasError: true,
      });
      return;
    }

    if (this.props.validation) {
      this._validate();
    }
  }

  _handleChange() {
    let foundError = false;

    if (this.state.hasError) {
      this._validate();
    }
  }
}
