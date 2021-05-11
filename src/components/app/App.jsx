import React, { Component } from 'react';
import RandomColor from '../../containers/Colors/RandomColor';
import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.mainThing}>
        <p>Incredibly Hypnotic Random Color Zone</p>
        <RandomColor />
      </div>
    );
  }
}
