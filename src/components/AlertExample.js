import React, { Component } from 'react'
import Alert from './Alert'
import './Alert.css'

export default class AlertExample extends Component {
  render() {
    const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    const longMessage = (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quibusdam expedita dolorum sint, mollitia vel numquam minus provident, officiis labore iste repellendus. Maiores necessitatibus odit illo officia dolore tempora placeat!</p>
        <p>Quae culpa exercitationem? <a href="#">Go back</a></p>
      </div>
    );


    return (
      <div>
        <h3>Alert UI Components</h3>
        <hr />
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
      </div>
    );
  }
}
