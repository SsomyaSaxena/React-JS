import React from 'react';
import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='MINI-DAILY' maxNum={10} numBalls={4}/>
    </div>
  );
}

export default App;
