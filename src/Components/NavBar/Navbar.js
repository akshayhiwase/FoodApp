import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seachText: ''
        }
    }




    render() {
        return (


            <div className="navbar">
                <a href="" className="nav-elements">Home</a>
                <a href="" className="nav-elements">About</a>
                <a href="" className="nav-elements">Contact</a>

            </div>


        )
    }

}

export default Navbar;