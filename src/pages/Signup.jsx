import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import {Container, Row, Col, Form, FormGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../firebase.config';
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { storage } from '../firebase.config';
import {toast} from 'react-toastify';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [password, setPassword] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [username, setUserName] = useState(" ");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const signup = async(e) =>{
        e.preventDefault();
        setLoading(true);

        try {
             
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                email, 
                password
            );
            const user = userCredential.user;
            const storageRef = ref(storage, `image/${Date.now() + username}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            
            uploadTask.on((error)=>{
                toast.error(error.message);
            }, ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async(getDownloadURL)=>{
                    
                    //update user profile
                    await updateProfile(user, {
                        displayName: username,
                        photoURL: getDownloadURL
                    });

                    //store user data in firestore database

                    await setDoc(doc(db,'users', user.uid), {
                        uid: user.uid,
                        displayName: username,
                        email,
                        photoURL: getDownloadURL
                    });
                });
            })
            setLoading(false);
            toast.success('Account created');
            navigate('/login');
        } catch (error) {
            setLoading(false);
            toast.error('Parol yoki email xato kiritildi');
        }
    }

    return (
        <Helmet title="SignUp">
            <Container>
                <Row>
                    {
                        loading ? (
                            <Col><h6 className="text-center">Loading</h6></Col>
                        ):(
                            <Col lg='6' className='m-auto text-center my-5 '>
                        <h3 className="fw-bold fs-4">SignUp</h3>

                        <Form className="auth__form" onSubmit={signup}>
                        <FormGroup className='form__group'>
                                <input 
                                type="text" 
                                placeholder='Username' 
                                value={username}
                                onChange={(e)=> setUserName(e.target.value)}
                                />
                            </FormGroup>
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
                            <FormGroup className='form__group'>
                                <input 
                                type="file" 
                               
                                onChange={(e)=> setFile(e.target.files[0])}
                                />
                            </FormGroup>
                            <button
                            type='submit'
                            className="buy__btn auth__btn">Create an Account</button>

                            <p> Don't have an account? <Link to='login'>Login</Link> </p>
                        </Form>
                    </Col>
                        )
                    }
                </Row>
            </Container>
        </Helmet>
        
    );
}

export default Signup;

