// Requires these props:
//  • label: Sets the text for the input's label
//  • id: sets the id property for the input and the <label for... attribute
//
// Uses these props:
//  • required: true or false, defaults to false. Adds required label, required attribute and aria-required='true'
//  • spellCheck: true or false, defaults to false. If true enables borwser autocorrection while typing
//  • errorMessage: string. If present triggers the error state and displays the error message


import React, { Component } from 'react'
import './Form.css'

export default class SelectInput extends Component {
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

    let errorMessage,
        options,
        self = this;

    //builds the option list from array passed in by prop "options"
    options = self.props.options.map(function(option){
      return (
          <option key={option} value={option}>
              {option}
          </option>
      )
    });

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

        <select
          id={this.props.id}
          name={this.props.id}
          className={this.state.isValid ? 'usa-input-success' : null}
          required={this.props.required}
          aria-required={this.props.required}
          ref={(select) => this._select = select}
          onChange={this._handleChange.bind(this)}>
            {options}
        </select>
      </div>
    );
  }

  _handleChange(selectedOpt) {


    if (this.props.onChange) {
          let change = {
            oldValue: this.state.selected,
            newValue: selectedOpt.target.value
          }
          this.props.onChange(change);
      }
      this.setState({selected: selectedOpt.target.value});

      this._validate();
  }
  
  _validate() {
    // First check to see if field is required and empty
    if (this.props.required && this._select.value.length < 1) {
      this.setState({
        hasError: true,
        isValid: false,
        errorMessageBody: 'This field is required'
      });
    } else {
      this.setState({
        hasError: false,
        isValid: true,
      });
    }
  }

}

SelectInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  errorMessage: React.PropTypes.string,
  options: React.PropTypes.array.isRequired,
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
    ])
};

SelectInput.defaultProps = {
  required: false,
  value: null,
};
