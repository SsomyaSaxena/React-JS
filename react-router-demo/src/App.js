import React, {Component} from "react";
import {Route , Switch, NavLink} from 'react-router-dom';
import './App.css';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';

class App extends Component {
  render() {
  return (
     <div className="App">
       <nav className="App-nav">
         <NavLink exact activeClassName="active-link" to="/">About</NavLink> 
         <NavLink exact activeClassName="active-link" to="/dog">Dog</NavLink>
         <NavLink exact activeClassName="active-link" to="/contact">Contact</NavLink>
          {/* THESE LAST TWO LINKS ARE FROM THE LAST VIDEO IN THE SECTION! */}
          {/* ============================================================ */}
          <NavLink exact activeClassName='active-link' to='/dog/r'>
            Dog(r)
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/dog/c'>
            Dog(c)
          </NavLink>
       </nav>
      {/* <Switch>
        <Route path="/dog" component={Dog} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={About} /> 
      </Switch> */}
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/dog" component={Dog} />
        <Route exact path="/contact" component={Contact} />
        {/* THESE TWO ROUTES ARE FROM THE LAST VIDEO IN THE SECTION! */}
        {/* ======================================================== */}
        {/* Component will instantiate a new Dog every time */}
        <Route exact path='/dog/c' component={() => <Dog name='Muffins' />} />
        {/* Render will re-use the existing dog component */}
        <Route exact path='/dog/r' render={() => <Dog name='Biscuits' />} />
      </Switch>
     </div>
  );
  }
}

export default App;
