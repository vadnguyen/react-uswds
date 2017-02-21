import React, { Component } from 'react'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
import TextArea from './TextArea'
import SignInForm from './SignInForm'

export default class FormExample extends Component {
  render() {
    //State Array to populate State Select field
  let states = ['', 'Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

    return (
      <div className="usa-content">
        <h3>Form UI Components</h3>
        <hr />
        <form className="usa-form-large">
          <fieldset>
            <legend>User Information</legend>
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
          </fieldset>
          <fieldset>
          <legend>Address Information</legend>
              <TextInput
                label="Street address 1"
                id="address1"
                required={true}
              />
              <TextInput
                label="Street address 2"
                id="address2"
                required={false}
              />
              <div className="usa-input-grid usa-input-grid-medium">
                <TextInput
                  label="City"
                  id="city"
                  required={true}
                />
              </div>
              <div className="usa-input-grid usa-input-grid-small">
                <SelectInput
                  label="State"
                  id="state"
                  required={true}
                  options={states}
                />                
              </div>
          </fieldset>
          <fieldset>
          <legend>Additional Comments</legend>
              <TextArea
                label="How did you hear about us?"
                id="howHeard"
                required={true}
              />

              <TextArea
                label="Tell me about yourself"
                id="aboutYou"
                required={true}
                errorMessage="This is too boring. Spice it up!"
              />
          </fieldset>
          <fieldset>
          <legend>Sign In</legend>
          <SignInForm />
          </fieldset>          
        </form>
      </div>
    );
  }
}
