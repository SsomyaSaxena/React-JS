import React , {Component} from 'react';
import './Lottery.css';
import Ball from './Ball.js';

class Lottery extends Component {
  static defaultProps = {
    title: "LOTTO",
    numBalls: 6,
    maxNum: 40
  }
  constructor(props){
    super(props);
    this.state = {
      nums : Array.from({length : this.props.numBalls})
    }
    this.handleClick = this.handleClick.bind(this);
  }
  generate(){
   this.setState(curState => ({
     nums : curState.nums.map(n => Math.floor(Math.random()*this.props.maxNum)+1)
   }))
   // using () after 'curState' because we are returning an object and hence to prevent clash of brackets.
  }
  handleClick(){
   this.generate();
  }
  render() {
    return (
      <section className="Lottery">
       <h1>{this.props.title}</h1>
       <div>
        {this.state.nums.map(n => <Ball num={n} />)}
       </div>
       <button onClick={this.handleClick}>Generate</button>
      </section>
      // 'n' is each element of the array num which initially has a value of null
    )
  }
}

export default Lottery;