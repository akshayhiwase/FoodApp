import React from 'react';
import Counter from './Components/Counter';
import './App.css';
import CounterContainer from './CounterContainer';
import MenuContainer from './Components/MenuContainer'
const data = [{
  heading: "Counter 1",
  inititalCounter: 100,
},
{
  heading: "Counter 2",
  inititalCounter: 40
}]
function App() {
  return (
    <div className="App">
      {/* {
        data.map(value => (
          <div>
            <div>{value.heading}</div>
            <Counter inititalCounter={value.inititalCounter}/>
          </div>
          )
        )

      } */}
      <MenuContainer />

      {/* <CounterContainer inititalCounter={50}/> */}
    </div>
  );
}

export default App;
