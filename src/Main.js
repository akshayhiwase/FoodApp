import React, { Component } from 'react';
import MenuContainer from './Components/MenuContainer';
import burger from './images/burger.jpg';
import pizza from './images/pizza.jpg'
import Header from './Components/Header'
import './App.css';


const initialMenuData = [
    {
        id: 1,
        name: 'Pizza',
        price: 55,
        ratting: 3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
        imageUrl: pizza
    },
    {
        id: 2,
        price: 100,
        name: 'Burger',
        ratting: 5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
        imageUrl: burger
    },
    {
        id: 3,
        name: 'Pizza',
        price: 55,
        ratting: 3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
        imageUrl: pizza
    },
    {
        id: 4,
        price: 100,
        name: 'Burger',
        ratting: 5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
        imageUrl: burger
    },
    {
        id: 5,
        name: 'Pizza',
        price: 55,
        ratting: 3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
        imageUrl: pizza
    },
    {
        id: 6,
        price: 100,
        name: 'Burger',
        ratting: 5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
        imageUrl: burger
    },
    {
        id: 7,
        name: 'Pizza',
        price: 55,
        ratting: 3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
        imageUrl: pizza
    },
    {
        id: 8,
        price: 100,
        name: 'Burger',
        ratting: 5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
        imageUrl: burger
    },
    {
        id: 9,
        name: 'Pizza',
        price: 55,
        ratting: 3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
        imageUrl: pizza
    },
    {
        id: 10,
        price: 100,
        name: 'Burger',
        ratting: 5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
        imageUrl: burger
    },
    {
        id: 11,
        name: 'Pizza',
        price: 55,
        ratting: 3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
        imageUrl: pizza
    },
    {
        id: 12,
        price: 100,
        name: 'Burger',
        ratting: 5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
        imageUrl: burger
    },

]

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredMenu: initialMenuData,
        }
    }

    setSearchText = text => {
        const filteredMenu = initialMenuData.filter((menu = {}) => menu.name.toLowerCase().includes(text));
        this.setState({
            ...this.state,
            filteredMenu: filteredMenu
        });
    }

    setSearchByRatting = text => {
        const filteredMenu = initialMenuData.filter((menu = {}) => menu.ratting >= parseInt(text));
        this.setState({
            ...this.state,
            filteredMenu: filteredMenu
        });
    }
    sortPriceLowtoHigh = () => {
        const filteredMenu = initialMenuData.sort((menu1 = {}, menu2 = {}) => { return menu1.price - menu2.price })
    }
    sortPriceHightoLow = () => {
        const filteredMenu = initialMenuData.sort((menu1, menu2) => { return menu2.price - menu1.price })
    }

    render() {
        const { setSearchByRatting, setSearchText, state = {} } = this;
        const { filteredMenu } = state;
        return (
            <div className="App">
                <Header />
                <MenuContainer menuData={filteredMenu} />
            </div>
        );
    }
}

export default Main;
