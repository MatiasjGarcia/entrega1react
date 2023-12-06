import React from 'react';
import CartWidget from './CartWidget';

export const NavBar = () => {
    return ( 
        <nav>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
        <a href="#" style={{ float: 'right' }}>
        Carrito
        <CartWidget />
        </a>
    </nav>
    );
}

export default NavBar;