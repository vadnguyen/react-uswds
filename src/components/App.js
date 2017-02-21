import React, { Component } from 'react'
import AlertExample from './AlertExample'
import FormExample from './FormExample'
import SignInForm from './SignInForm'

class App extends Component {
  render() {
    return (
      <div className="App usa-grid">
        <h1>UI Components</h1>
        <AlertExample />
        <FormExample />
        <SignInForm />
      </div>
    );
  }
}

export default App;
