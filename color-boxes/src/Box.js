import React , {Component} from 'react';
import {choice} from './helpers.js';
import './Box.css';

class Box extends Component {
  constructor(props){
    super(props);
    this.state = {
      color : choice(this.props.allColors)
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
   this.pickColor();
  }
  pickColor(){
    let newColor ;
    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.color); //Keep on finding new color until and unless the newcolor is different from the existing color
    this.setState({color : newColor})
  }
  render() {
    return (
      <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}></div>
    )
  }
}

export default Box;