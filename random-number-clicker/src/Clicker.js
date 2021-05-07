import React , {Component} from 'react';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randnum: 1
    }
    this.RandomClicker = this.RandomClicker.bind(this);
  }
  RandomClicker()
  {
    let number = Math.floor(Math.random()*10)+1;
    this.setState({randnum: number});
  }
  render() {
    return (
      <div>
       <h1> Your NUMBER is : {this.state.randnum} </h1>
       {this.state.randnum === 7 ? <h2>YOU WIN! GOOD JOB</h2> : <button onClick={this.RandomClicker}>Random Clicker!</button>} 
      </div>
    )
  }
}

// dont use this.RandomClicker() because it will immediately execute the function.
export default Clicker;