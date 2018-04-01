import React from "react";

function Square(props) {
    return (
      <button className="square" onClick={props.whenClicked}>
        {props.value}
      </button>
    );
}

export default Square;