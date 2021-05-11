import React, { Component } from 'react';
import DisplayColor from '../../components/app/Display/DisplayColor';
import styles from './RandomColor.css';

export default class RandomColor extends Component {
  state = {
    color: '#58eb34',
    paletteArray: ['#32a8a6', '#ed6f00', '#c40a86', '#1f25d1', '#58eb34'],
  };

  randomColorChoice = () => {
    const arr = this.state.paletteArray;
    const colorIndex = Math.floor(Math.random() * arr.length);
    this.setState({ color: arr[colorIndex] });
  };

  componentDidMount = async () => {
    await setInterval(this.randomColorChoice, 1000);
  };

  render() {
    return (
      <div className={styles.colorInterface}>
        <p>this is a message from the rainbow hawks of titan</p>
        <DisplayColor newColor={this.state.color} />
      </div>
    );
  }
}
