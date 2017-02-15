import React, { Component } from 'react';
import Alert from './Alert'
import TextInput from './TextInput'

class App extends Component {
  render() {
    const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    const longMessage = (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quibusdam expedita dolorum sint, mollitia vel numquam minus provident, officiis labore iste repellendus. Maiores necessitatibus odit illo officia dolore tempora placeat!</p>
        <p>Quae culpa exercitationem? <a href="#">Go back</a></p>
      </div>
    );

    return (
      <div className="App usa-grid">
        <h1>Testing</h1>

        <Alert
          type="success"
          title="Success Status"
          body={message}
        />
        <Alert
          type="warning"
          title="Warning Status"
          body={message}
        />
        <Alert
          type="error"
          title="Error Status"
          body={message}
        />
        <Alert
          type="info"
          title="Information Status"
          body={message}
        />
        <Alert
          title="No type provided"
          body={longMessage}
        />

        <TextInput
          label="First name"
          id="firstName"
          required={true}
          validation={[{regex: /e/, message:'Must contain a lowercase e'}, {regex: /A/, message:'Must contain a uppercase A'}]}
        />

        <TextInput
          label="Last name"
          id="lastName"
          validation={[{regex: /e/, message:'Must contain a lowercase e'}]}
        />
      </div>
    );
  }
}

export default App;