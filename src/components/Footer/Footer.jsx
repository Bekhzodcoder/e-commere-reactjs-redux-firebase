import React from 'react';
import "./footer.css";
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/eco-logo.png';

    
const Footer = () => {

    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='4'>
                        <div className="logo">
                            <img src={logo} alt="" />
                            <div>
                                <h1 className="text-white">Multimart</h1>
                            </div>
                        </div>
                            <p className="footer__text mt-4">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium recusandae ipsa maxime, laborum odio deleniti excepturi libero adipisci et!
                            </p>
                    </Col>
                    <Col lg='3'>
                        <div className="footer__quick-links">
                            <h4 className="footer__quick-title">Top Categories</h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Mobile Phones</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Modern Sofa</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Arm Chair</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2'>
                    <div className="footer__quick-links">
                            <h4 className="footer__quick-title">Userful Links</h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/shop">Shop</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/cart">Cart</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/login">Login</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3'>
                    <div className="footer__quick-links">
                            <h4 className="footer__quick-title">Contact</h4>
                            <ListGroup className=" footer__contact">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p>Anlanta, Bukhara</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i className="ri-phone-line"></i></span>
                                    <p>+998 91 440 88 70</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-mail-line"></i></span>
                                    <p>example@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='12'>
                        <p className="footer__copyright">copyright {year} developed by Bekhzod Istamov</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
    