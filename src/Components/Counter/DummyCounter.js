import React, { Component } from 'react';

import './style.css';

const  Counter = (props) => {
   
        return (
            <div className="counter--wrapper">
                <button onClick={() => props.updateCounter()}>-</button>
                <span>{props.counter}</span>
                <button onClick={() => props.updateCounter(true)}>+</button>
            </div>
        )
  


}

export default Counter;