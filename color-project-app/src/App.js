import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import generatePalette from './ColorHelper';
import SingleColorPalette from './SinglePaletteColor';
import NewPaletteForm from './NewPaletteForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: seedColors }
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    })
  }
  savePalette(newPalette) {
    alert(1)
    console.log(newPalette)
    this.setState({ palettes: [...this.state.palettes, newPalette] },()=>console.log('next state',this.state))
  }
  render() {
    // console.log(generatePalette(seedColors[1]));
    return (
      <Switch>
        <Route exact path="/palette/new" render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} {...routeProps} />} />
        <Route exact path="/" render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps} />} />
        <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
        <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => <SingleColorPalette colorId={routeProps.match.params.colorId}
          palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />} />
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(seedColors[1])} />
      // </div>
    );
  }
}

export default App;
