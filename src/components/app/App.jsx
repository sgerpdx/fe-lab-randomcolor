import React, { Component } from 'react';
import RandomColor from '../../containers/Colors/RandomColor';

export default class App extends Component {
  render() {
    return (
      <div>
        <p>hey there</p>
        <RandomColor />
      </div>
    );
  }
}
