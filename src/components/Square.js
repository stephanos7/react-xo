import Radium from "radium";
import React from "react";

import styles from "../styles/Square-styles";

function Square(props) {
    return (
      <div style={styles.root} onClick={props.whenClicked}>
        <span style={styles.symbol}>{props.value}</span>
      </div>
    );
}

export default Radium(Square);