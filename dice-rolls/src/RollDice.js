import React , {Component} from 'react';
import './RollDice.css';
import Dice from './Dice.js';

class RollDice extends Component {
  static defaultProps = {
    sides : ['one','two','three','four','five','six']
  };
  constructor(props) {
    super(props);
    this.state = { die1 : 'one', die2 : 'one' , rolling : false }
    this.roll = this.roll.bind(this); //to help the function know what 'this' are we referring to.
  } 
  roll()
  {
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({ die1: newDie1 , die2: newDie2 , rolling: true });

    setTimeout(() => {
      this.setState({rolling : false })
    },1000); //executes the function after a given time period (here : 1000ms)!
  }
  render() {
    return (
      <div className="RollDice">
       <div className="RollDice-content">
        <Dice face={this.state.die1} shaking={this.state.rolling} />
        <Dice face={this.state.die2} shaking={this.state.rolling} />
       </div>
       <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling ? 'ROLLING....'  : 'ROLL DICE' }</button>
      </div>
    )
   }
}

export default RollDice;