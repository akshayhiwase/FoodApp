import React, { Component } from 'react';

import './search.css';
class SeachBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seachText: ''
        }
    }

    changeSeachText = (event) => {
        console.log(event.target.value);
        this.setState({ seachText: event.target.value }, () => console.log(this.state.seachText))


    }

    getResult = () => {
        this.props.setSearchText(this.state.seachText);
        console.log(this.state.seachText);
    }


    render() {
        return (


            <div className="search-bar">
                <input type="text" value={this.state.seachText} onChange={this.changeSeachText} onKeyUp={this.getResult} placeholder="Type Here" />
                <button className="search" onClick={this.getResult} >Search</button>
            </div>


        )
    }

}

export default SeachBar;