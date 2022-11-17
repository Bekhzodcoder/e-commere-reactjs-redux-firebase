import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import {Container, Row, Col, Form, FormGroup} from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase.config';
import {toast} from 'react-toastify';

import '../styles/login.css';

const Login = () => {

    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const signIn = async (e) =>{
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;
            console.log(user);
            setLoading(false);
            toast.success('Muvafaqiyatli kirdingiz');
            navigate('/checkout');
        } catch (error) {
            setLoading(false);
            toast.error(error.message);
        }
    }


    return (
        <Helmet title="Login">
            <Container>
                <Row>
                    {
                        loading?(
                            <Col lg='12'><h5 className='text-center'>Loading</h5></Col>
                        ):(
                            <Col lg='6' className='m-auto text-center my-5 '>
                        <h3 className="fw-bold fs-4">Login</h3>

                        <Form className="auth__form" onSubmit={signIn}>
                            <FormGroup className='form__group'>
                                <input 
                                type="email" 
                                placeholder='Enter your email' 
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input 
                                type="password" 
                                placeholder='Enter your password' 
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                                />
                            </FormGroup>
                            <button
                            type='submit'
                            className="buy__btn auth__btn">Login</button>
                            <p> Don't have an account? <Link to='signup' >Create an account</Link> </p>
                        </Form>
                    </Col>
                        )
                    }
                </Row>
            </Container>
        </Helmet>
        
    );
}

export default Login;
