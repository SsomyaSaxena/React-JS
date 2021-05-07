import React, {Component} from "react";
import {Route , Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <VendingMachine />}></Route>
        <Route exact path="/soda" render={() => <Soda />}></Route>
        <Route exact path="/chips" render={() => <Chips />}></Route>
        <Route exact path="/sardines" render={() =>  <Sardines />}></Route>
      </Switch>  
    </div>
  );
  }
}

export default App;
