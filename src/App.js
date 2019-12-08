import React from 'react';
import Counter from './Components/Counter';
import './App.css';
import CounterContainer from './CounterContainer';

function App() {
  return (
    <div className="App">
      <Counter inititalCounter={100}/>
      <CounterContainer inititalCounter={50}/>
    </div>
  );
}

export default App;
