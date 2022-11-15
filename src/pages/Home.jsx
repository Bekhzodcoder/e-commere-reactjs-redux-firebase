
import React, {useState, useEffect} from 'react';
import '../styles/home.css';
import { Col, Container, Row } from 'reactstrap';
import products from '../assets/data/products';

import Helmet from '../components/Helmet/Helmet';

import heroImg from '../assets/images/hero-img.png';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import Services from '../services/Services';
import ProductsList from '../components/Ui/ProductsList';

const Home = () => {

    const [tredingProducts, setTredingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const year = new Date().getFullYear();

    useEffect(()=>{
        const filterTrendingProducts = products.filter(item => item.category == 'chair');
        const filterBestSalesProducts = products.filter(item => item.category == 'sofa');
        setTredingProducts(filterTrendingProducts);
        setBestSalesProducts(filterBestSalesProducts);
    }, [])
    return (
        <Helmet title={'Home'}>
            <section className='hero__section'>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="hero__content">
                                <p className="hero__subtitle">Treding product in - {year} </p>
                                <h2>Make Your Interior More Minimalistic & Modern</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus debitis laborum eius mollitia corrupti voluptatibus nostrum, aliquid sint! Corrupti.
                                </p>
                                <motion.button  whileTap={{scale:1.2}} className='buy__btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
                            </div>
                        </Col>
                        <Col>
                            <div className='hero__img'>
                                <img src={heroImg} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Services />

            <section className="trending__products">
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2 className="section__title">Trending Products</h2>
                        </Col>
                        <ProductsList data={tredingProducts} />
                    </Row>
                </Container>
            </section>

            <section className="best__sales">
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2 className="seection title">Best Sales</h2>
                        </Col>
                        <ProductsList data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}

export default Home;
