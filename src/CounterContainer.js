import React from 'react';
import DummyCounter from './Components/Counter/DummyCounter';
import './App.css';

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.inititalCounter
        }
    }

    updateCounter = (increase = false) => {
        this.setState(
            {
                counter: increase ? this.state.counter + 1 : this.state.counter - 1
            }
        )
    }

    render() {
        return (
          <div className="App">
            <DummyCounter 
                counter={this.state.counter}
                updateCounter={this.updateCounter}
            />
          </div>
        );
    }
}

export default CounterContainer;
