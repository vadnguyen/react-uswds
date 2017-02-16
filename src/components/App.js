import React, { Component } from 'react';
import AlertExample from './AlertExample'
import FormExample from './FormExample'

class App extends Component {
  render() {
    return (
      <div className="App usa-grid">
        <h1>UI Components</h1>
        <AlertExample />
        <FormExample />
      </div>
    );
  }
}

export default App;
