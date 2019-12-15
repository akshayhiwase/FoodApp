import React, { Component } from 'react';
import MenuContainer from './Components/MenuContainer';
import SeachBar from './Components/SearchBar';
import logo from './images/logo192.png';

import './App.css';
const data = [{
  heading: "Counter 1",
  inititalCounter: 100,
},
{
  heading: "Counter 2",
  inititalCounter: 40
}]

const initialMenuData = [
  {
    id: 1,
    name: 'Pizza',
    price: 55,
    ratting: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
    imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 2,
    price: 100,
    name: 'pasta',
    ratting: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
    imageUrl: logo
  },
  {
    id: 3,
    name: 'Pizza',
    price: 55,
    ratting: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
    imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 4,
    price: 100,
    name: 'pasta',
    ratting: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
    imageUrl: logo
  },
  {
    id: 5,
    name: 'Pizza',
    price: 55,
    ratting: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
    imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 6,
    price: 100,
    name: 'pasta',
    ratting: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
    imageUrl: logo
  },
  {
    id: 7,
    name: 'Pizza',
    price: 55,
    ratting: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
    imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 8,
    price: 100,
    name: 'pasta',
    ratting: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
    imageUrl: logo
  },
  {
    id: 9,
    name: 'Pizza',
    price: 55,
    ratting: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
    imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 10,
    price: 100,
    name: 'pasta',
    ratting: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
    imageUrl: logo
  },
  {
    id: 11,
    name: 'Pizza',
    price: 55,
    ratting: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
    imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 12,
    price: 100,
    name: 'pasta',
    ratting: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit',
    imageUrl: logo
  },

]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredMenu: initialMenuData,
        }
    }

    setSearchText = text => {
        const filteredMenu = initialMenuData.filter(menu => menu.name.includes(text));
        this.setState({
            ...this.state,
            filteredMenu: filteredMenu
        });
    }

    setSearchByRatting = text => {
        const filteredMenu = initialMenuData.filter(menu => menu.ratting >= parseInt(text));
        this.setState({
            ...this.state,
            filteredMenu: filteredMenu
        });
    }

  render() {
    return (
      <div className="App">
        <SeachBar setSearchText={this.setSearchText} setSearchByRatting={this.setSearchByRatting}/>
        <MenuContainer menuData={this.state.filteredMenu} />
      </div>
    );
  }
}

export default App;
