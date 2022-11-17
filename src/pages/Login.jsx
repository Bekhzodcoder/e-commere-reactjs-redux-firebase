import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import {Container, Row, Col, Form, FormGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
    return (
        <Helmet>
            <Container>
                <Row>
                    <Col lg='6' className='m-auto text-center my-5 '>
                        <h3 className="fw-bold fs-4">Login</h3>

                        <Form className="auth__form">
                            <FormGroup className='form__group'>
                                <input type="email" placeholder='Enter your email' />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="password" placeholder='Enter your password' />
                            </FormGroup>
                            <button className="buy__btn auth__btn">Login</button>
                            <p> Don't have an account? <Link to='signup' >Create an account</Link> </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Helmet>
        
    );
}

export default Login;
