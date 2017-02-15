// Uses these props:
//  • type:  sets background color and icon type. Default is 'info'
//  • title: Text for the title of the alert (<h3>). Inline styles allowed
//  • body: Text or HTML for the alert message


import React, { Component } from 'react';
import './Alert.css';

export default class Alert extends Component {
  render() {
    return (
      <div className={`usa-alert usa-alert-${this.props.type}`}>
        <div className="usa-alert-body">
          <h3 className="usa-alert-heading">{this.props.title}</h3>
          <div className="usa-alert-text">{this.props.body}</div>
        </div>
      </div>
    );
  }
}

const TYPE_INFO = 'info';
const TYPE_SUCCESS = 'success';
const TYPE_ERROR = 'error';
const TYPE_WARNING = 'warning';


Alert.propTypes = {
  type: React.PropTypes.oneOf([
    TYPE_INFO,
    TYPE_SUCCESS,
    TYPE_ERROR,
    TYPE_WARNING
  ])
};

Alert.defaultProps = {
  type: 'info'
};
