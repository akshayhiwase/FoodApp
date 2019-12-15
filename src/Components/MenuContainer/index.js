import React from 'react';


import './style.css';

const MenuContainer = (props) => {
    return (
        <div id="menu-container">
            {props.menuData.map(menu => (
                <div className="menu" style={ {border: "1px solid #ccc", marginBottom: "10px", padding: "20px"} } key={menu.id} >   
                    <div>{menu.id}</div>     
                    <img src={menu.imageUrl} alt={`${menu.name}'s image`}
                        style={ {width: "100%"} } />
                    
                    <div className="menu-description">
                        <div className="name-price-ratting">
                            <div>
                                <span className="bold">{menu.name}</span>
                                <div className="bold">
                                    &#x20b9; {menu.price}
                                </div>
                            </div>
                            <div className="star">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
        
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