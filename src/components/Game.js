import React from "react";
import { Style } from "radium";

import Board from "./Board";
import globalStyles from "../styles/global-styles";

class Game extends React.Component {
  render() {
    return (
      <div>
        <Style rules={globalStyles} />
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
