import React , {Component} from 'react';
import Box from './Box';
import BoxMakerForm from './BoxMakerForm';

class BoxList extends Component {
  constructor(props)
  {
    super(props);
    this.state = { boxes: [] }
    this.addBox = this.addBox.bind(this);
  }
  addBox(newBox)
  {
    this.setState({
      boxes: [...this.state.boxes, newBox]
    })
  }
  remove(id)
  {
   this.setState({
     boxes: this.state.boxes.filter(box => box.id !== id)
   })
  }
  renderItems() {
    return (
        this.state.boxes.map(box => (
          <Box key={box.id} id={box.id} height={box.height} width={box.width} backgroundColor={box.backgroundColor} removeBox={() => this.remove(box.id)}/>
          //You cant access the key , hence we make a new variable to store the same ID value as in key.
        )
        )
    );
  }
  render() {
    return (
      <div>
        <h1>Color Box-Maker</h1>
        <BoxMakerForm addBox={this.addBox} />
        {this.renderItems()}
      </div>
    )
  }
}

export default BoxList;