import React, { Component } from 'react';

import './sortprice.css';

class SortPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seachText: ''
        }
    }

    render() {
        return (


            <div className="price-menu">
                <select>
                    <option value="select menu">Select Price</option>
                    <option value="High to Low">High to Low</option>
                    <option value="Low to high">Low to High</option>
                </select>
            </div>

        )
    }

}

export default SortPrice;