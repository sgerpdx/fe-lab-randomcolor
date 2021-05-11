import React, { Component } from 'react';
import styles from './DisplayColor.css';

export default class DisplayColor extends Component {
  render() {
    return (
      <div className={styles.colorBox}>
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
