import React, { Component } from 'react'
import TextInput from './TextInput'
import './Alert.css'

export default class SignInForm extends Component {
  render() {

    return (
      <div>
        or create an account
        
        <TextInput
          label="Username or email address"
          id="username"
          required={true}
        />
        <TextInput
          label="Password"
          id="password"
          required={true}
          type="password"
          toggleLabel="Show password"
          toggleURL="javascript:void(0);"
          signInBtn="Log Me In Now!!"
        />
      </div>
      );
  }
}