import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    };
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }


  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number); //Calls Number on each value (casting it to a number).If it is a string it will try to convert the string to a numerical value. Left value will be stored in y and right value in x.
    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    let hasWon = board.every(row => row.every(cell => !cell));
    //Changes the state in the new board DS which is then used with setState.
    flipCell(y,x);   //Selected cell
    flipCell(y,x+1); //For right cell
    flipCell(y,x-1); //For left cell
    flipCell(y+1,x); //For bottom cell
    flipCell(y-1,x); //For top cell

    this.setState({board, hasWon}); //OR this.setState({board:board, hasWon:hasWon});
  }

  render() {
    if(this.state.hasWon)
    { 
      return (
        <div className="Board-Winner">
         <div className="Winner">
           <span className="neon-orange">YOU</span> 
           <span className="neon-blue">WIN!</span>
         </div> 
        </div>
        //Span makes them come in one-line automatically 
      ) 
    }
    let tblboard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(<Cell key={coord} isLit={this.state.board[y][x]} flipCellsAroundMe={() => this.flipCellsAround(coord)} />);
      }
      tblboard.push(<tr>{row}</tr>); //Display in row form
    }
    return (
      <div>
       <div className="Board-Title">
         <div className="neon-orange">LIGHTS</div>
         <div className="neon-blue">OUT</div>
       </div>
       <table  className="Board">
        <tbody>{tblboard}</tbody>
       </table>
      </div>
    )
  }
}

export default Board;
