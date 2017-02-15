import React, { Component } from 'react';
import './Alert.css';

export default class Alert extends Component {
  render() {
    let alertClass;

    if (this.props.type) {
      alertClass = `usa-alert usa-alert-${this.props.type}`;
    } else {
      alertClass = 'usa-alert usa-alert-info';
    }
    return (
      <div className={alertClass}>
        <div className="usa-alert-body">
          <h3 className="usa-alert-heading">{this.props.title}</h3>
          <div className="usa-alert-text">{this.props.body}</div>
        </div>
      </div>
    );
  }
}
