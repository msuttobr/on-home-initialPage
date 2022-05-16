import React from 'react'

import './style.css';

const MenuHamburguer = () => {
    return (
        <>
            <input type="checkbox" id="checkbox-menu" />
            <label for="checkbox-menu">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </>
    )
}

export default MenuHamburguer