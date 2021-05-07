import React , {Component} from 'react';

class Box extends Component {
  render() {
    return (
      <div>
       <div style = {{
         height: `${this.props.height}em`,
         width: `${this.props.width}em`,
         backgroundColor: this.props.backgroundColor
       }} />
       <button onClick={this.props.removeBox} style={{display:"block"}}>Remove Box</button>
      </div>
    )
  }
}

export default Box;