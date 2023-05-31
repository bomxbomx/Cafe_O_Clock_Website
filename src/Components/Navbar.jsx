import React, {useContext, useState} from 'react'
import {Link} from 'react-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import CartContext from '../Context/Cart/CartContext';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// import logo from '../images/logo1.png'

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    const {cartItems,showHideCart} = useContext(CartContext);
    return (
        <div>
            <nav className={
                nav ? "nav active" : "nav"
            }>
                <Link to='main' className='logo'
                    style={
                        {fontSize: '30px'}
                    }
                    smooth={true}
                    duration={500}>
                    Coffee<span style={
                        {color: 'red'}
                    }>O</span>Clock
                </Link>
                <input className='menu-btn' type='checkbox' id='menu-btn'></input>
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li>
                        <Link to='main'
                            smooth={true}
                            duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to='products'
                            smooth={true}
                            duration={500}>Products</Link>
                    </li>
                    <li>
                        <Link to='about'
                            smooth={true}
                            duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to='contact'
                            smooth={true}
                            duration={500}>Contact Us</Link>
                    </li>
                </ul>
                <Link to='cart' className='cart'>
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#333" className="cart-icon" style={{cursor:'pointer'}} onClick={showHideCart}/>
                    {cartItems.length > 0 && <div className='item__count'><span style={{marginBottom:'100px',cursor:'pointer'}} onClick={showHideCart}>{cartItems.length}</span></div>}
                </Link>
            </nav>
        </div>
    )
}
