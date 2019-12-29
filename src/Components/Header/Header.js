import React, { Component } from 'react';
import Logo from '../Logo'
import Navbar from '../NavBar'
import SearchBar from '../SearchBar'
import SortPrice from '../SortPrice'
import SortRatting from '../SortRatting'
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        const { setSearchByRatting, setSearchText, state = {} } = this;
        return (
            <div className="header">
                <Logo />
                <Navbar />
                <SearchBar setSearchText={setSearchText} setSearchByRatting={setSearchByRatting} />
                <SortPrice />
                <SortRatting />
            </div>
        )
    }

}

export default Header;