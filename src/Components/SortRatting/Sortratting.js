import React, { Component } from 'react';

import './sortratting.css';

class SortRatting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seachText: ''
        }
    }




    render() {
        return (

            <div className="ratting-menu">
                <select>
                    <option value="select menu">Select Ratting</option>
                    <option value="High to Low" >High to Low</option>
                    <option value="Low to high">Low to High</option>
                </select>
            </div>


        )
    }

}

export default SortRatting;