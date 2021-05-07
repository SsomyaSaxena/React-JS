import React , {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

class BoxMakerForm extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      height: '' ,
      width: '',
      backgroundColor : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt)
  {
    evt.preventDefault();
    const freshBox = {...this.state , id: uuidv4()};
    this.props.addBox(freshBox);
    this.setState({ 
    height: '' ,
    width: '',
    backgroundColor : '' 
    });
  }
  handleChange(evt)
  {
    this.setState( { [evt.target.name] : evt.target.value});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='height'>Height: </label>
        <input
          id='height'
          name='height' //same as the state variable
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label htmlFor='width'>Width: </label>
        <input
          id='width'
          name='width'
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label htmlFor='backgroundColor'>Background-Color: </label>
        <input
          id='backgroundColor'
          name='backgroundColor'
          value={this.state.backgroundColor}
          onChange={this.handleChange}
        />
        <button>SUBMIT</button>
      </form>
    );
  }
}

export default BoxMakerForm;