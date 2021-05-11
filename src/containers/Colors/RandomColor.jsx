import React, { Component } from 'react';
import DisplayColor from '../../components/app/Display/DisplayColor';

export default class RandomColor extends Component {
  render() {
    return (
      <div>
        <p>this is a message from the rainbow hawks of titan</p>
        <DisplayColor />
      </div>
    );
  }
}
