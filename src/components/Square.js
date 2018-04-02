import Radium from "radium";
import React from "react";

import styles from "../styles/Square-styles";

function Square(props) {
    return (
      <div className="square" style={styles.root} onClick={props.whenClicked}>
        {props.value}
      </div>
    );
}

export default Radium(Square);