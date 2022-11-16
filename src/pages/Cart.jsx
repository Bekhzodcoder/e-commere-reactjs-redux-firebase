import React from 'react';
import '../styles/Cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/Ui/CommonSection';
import {Container, Row, Col} from 'reactstrap';
import tdImg from '../assets/images/arm-chair-01.jpg';
import { motion } from 'framer-motion';
// import {cartActions} from 'redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length === 0 ? (
                                    <h2>No item added to the cart</h2>
                                ):(
                            
                            <table className='table bordered'>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map((item, index)=>(
                                        <tr key={index}>
                                            <td><img src={item.imgUrl} alt="logo" /></td>
                                            <td>{item.productName}</td>
                                            <td>${item.price}</td>
                                            <td>{item.quantity}px</td>
                                            <motion.td whileTap={{scale:1.2}}><i className="ri-delete-bin-line"></i></motion.td>
                                        </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                                )}
                        </Col>
                        
                        <Col lg='3'></Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}

export default Cart;
