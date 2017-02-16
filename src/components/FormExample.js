import React, { Component } from 'react'
import TextInput from './TextInput'
import TextArea from './TextArea'

export default class FormExample extends Component {
  render() {
    return (
      <div>
      <h3>Form UI Components</h3>
      <form className="usa-form-large">
        <TextInput
            label="First name"
            id="firstName"
            required={true}
            validation={[{regex: /e/, message:'Must contain a lowercase e'}, {regex: /A/, message:'Must contain a uppercase A'}]}
          />

          <TextInput
            label="Last name"
            id="lastName"
            required={true}
            errorMessage="The last name is required."
          />

          <TextInput
            label="Social Security Number (SSN)"
            id="ssn"
          />

          <TextArea
            label="How did you hear about us?"
            id="howHeard"
            required={true}
          />

          <TextArea
            label="Tell me about yourself"
            id="aboutYou"
            errorMessage="This is too boring. Spice it up!"
          />
      </form>
      </div>
    );
  }
}
