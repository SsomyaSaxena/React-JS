import React, { Component } from "react";

class Dog extends Component {
  componentDidMount() {
    console.log("DOG DID MOUNT!");
  }
  componentWillUnmount() {
    console.log("DOG WILL UNMOUNT!");
  }
  render() {
    console.log("DOG RENDER!");
    return (
      <div className='Dog'>
        <h1>Dog!!!</h1>
        <h3>This dog is named: {this.props.name}</h3>
        <img src='https://i.insider.com/5ef54cb61918242cfb4ec653?width=1100' alt="Dog"/>
      </div>
    );
  }
}
export default Dog;
