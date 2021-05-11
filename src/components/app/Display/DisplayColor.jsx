import React, { Component } from 'react';

export default class DisplayColor extends Component {
  render() {
    return (
      <div>
        display shout out
        <div
          style={{
            background: this.props.newColor,
            height: '40px',
            width: '40px',
          }}
        ></div>
      </div>
    );
  }
}
