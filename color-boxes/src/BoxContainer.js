import React , {Component} from 'react';
import Box from './Box.js';
import './BoxContainer.css';

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes : 21,
    allColors : ['lightpink','#f59d45','lightblue','#f5d245','#f56262','#ce86f7','#4c9ef5','#96fa64']
  }
  render() {
    const boxes = Array.from({ length : this.props.numBoxes}).map( () => <Box allColors={this.props.allColors}/> )
    return (
      <div className="BoxContainer">
       {boxes}
      </div>
    )
  }
}

export default BoxContainer;