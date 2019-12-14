import React from 'react';

import logo from '../../images/logo192.png';


const menuData = [
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
    }
]


const MenuContainer = () => {
    return (
        <div>
            {true ? "hello" : "hi"}
            {menuData.map(menu => (
                <div class="menu" style={ {border: "1px solid #ccc", marginBottom: "10px", padding: "20px"} } >        
                    <img src={menu.imageUrl} alt={`${menu.name}'s image`}
                        style={ {width: "100px"} } />
                    
                    <div class="menu-description">
                        <div class="name-price-ratting">
                            <div>
                                <span class="bold">{menu.name}</span>
                                <div class="bold">
                                    &#x20b9; {menu.price}
                                </div>
                            </div>
                            <div class="star">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
        
                            </div>
                        </div>
        
                        <p id="item-dics">{menu.description} </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MenuContainer;