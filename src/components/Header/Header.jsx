import React, {useRef, useEffect} from 'react';
import './Header.css';

import { NavLink, useNavigate, Link} from 'react-router-dom';
import {motion} from 'framer-motion';

import logo from '../../assets/images/eco-logo.png';
import user from '../../assets/images/user-icon.png';

import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';



const nav__links = [
    {
        path:'/',
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
    
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const {currentUser}  = useAuth();
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    const stickyHeaderFunc = () =>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header');
            }else{
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

    useEffect(()=>{
        stickyHeaderFunc();

        return ()=> window.removeEventListener('scroll', stickyHeaderFunc);
    })
    const profileActionRef = useRef(null);
    const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions');
    const menuToggle = () => menuRef.current.classList.toggle('active__menu');

    const navigate = useNavigate();

    const navigateToCart = () =>{
        navigate('/cart');
    }

    const logout = () =>{
        signOut(auth).then(()=>{
            toast.success('Logged out');
            navigate('/');
        }).catch(err=>{
            toast.error(err.message);
        })
    }

    return (
        <div className='header' ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <NavLink to='/'>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>Multipark</h1>
                            </div>
                        </div>
                        </NavLink>

                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
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
                            <span className="cart__icon" onClick={navigateToCart}>
                                <i className="ri-shopping-bag-line"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>
                            <div className='profile'>
                            <motion.img 
                                whileTap={{scale:1.2}} 
                                onClick={toggleProfileActions}
                                src={currentUser ? currentUser.photoURL : user} 
                                alt="user" />
                            <div 
                                className="profile__actions" 
                                ref={profileActionRef}
                                onClick={toggleProfileActions}>
                                {
                                    currentUser ? <span onClick={logout}>Logout</span> :
                                     <div className='d-fex align-items-center justify-content-center flex-column'>
                                        <Link to='/signup'>Signup</Link>
                                        <Link to='/login'>Login</Link>
                                    </div>
                                }
                            </div>
                            </div>
                        <div className="mobile__menu" >
                            <span onClick={menuToggle}><i className="ri-menu-line"></i></span>
                        </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
