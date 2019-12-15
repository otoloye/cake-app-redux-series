import React from 'react';
import './App.css';
import Cake from './Cake';
import IceCream from './IceCream';
import CakeInput from './CakeInput';

function App() {
  return (
    <div className="App">
      <Cake />
      <CakeInput />
      <IceCream />
    </div>
  );
}

export default App;
