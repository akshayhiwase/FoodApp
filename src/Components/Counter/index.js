import React, { Component } from 'react';

import './style.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.inititalCounter
        }
    }

    /*decreaseCounter = () => {
        this.setState(
            {
                counter: this.state.counter - 1
            }
        )
    }

    increaseCounter = () => {
        this.setState(
            {
                counter: this.state.counter + 1
            }
        )
    }*/ 

    updateCounter = (increase = false) => {
        this.setState(
            {
                counter: increase ? this.state.counter + 1 : this.state.counter - 1
            }
        )
    }


    render() {
        return (
            <div className="counter--wrapper">
                <button onClick={() => this.updateCounter()}>-</button>
                <span>{this.state.counter}</span>
                <button onClick={() => this.updateCounter(true)}>+</button>
            </div>
        )
    }


}

export default Counter;