import React from "react";

import Square from "./Square";
import styles from "../styles/Board-styles";

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares : Array(9).fill(null),
      xIsNext: true
    }
  }

  renderSquare(i) {
    return (
    <Square value={this.state.squares[i]} 
            whenClicked={() => this.handleClick(i)} />
    )
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ 
      squares: squares,
      xIsNext: !this.state.xIsNext 
    });
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div>{status}</div>
        <div style={styles.board}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;