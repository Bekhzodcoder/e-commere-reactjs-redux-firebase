import React from 'react';
import './Header.css';

import { NavLink } from 'react-bootstrap';
import {motion} from 'framer-motion';

import logo from '../../assets/images/eco-logo.png';
import user from '../../assets/images/user-icon.png';

import { Container, Row } from 'reactstrap';

const nav__links = [
    {
        path:'/home',
        display:"Home"
    },
    {
        path:'/shop',
        display:"Shop"
    },
    {
        path:'/cart',
        display:"Cart"
    }
]

const Header = () => {
    return (
        <div className='header'>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>Multipark</h1>
                            </div>
                        </div>

                        <div className="navigation">
                            <ul className="menu">
                                {nav__links.map((item, index)=>(
                                    <li className="nav__item" key={index}>
                                        <NavLink to={item.path}
                                        className={(navClass)=>navClass.isActive ? 'nav__active' : ''}
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="nav__icons">
                            <span className="fav__icon">
                                <i className="ri-heart-line"></i>
                                <span className="badge">1</span>
                            </span>
                            <span className="cart__icon">
                                <i className="ri-shopping-bag-line"></i>
                                <span className="badge">1</span>
                            </span>
                            <span><motion.img whileTap={{scale:1.2}} src={user} alt="user" /></span>
                        </div>
                            <span className='mobile__menu'><i className="ri-menu-line"></i></span>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
