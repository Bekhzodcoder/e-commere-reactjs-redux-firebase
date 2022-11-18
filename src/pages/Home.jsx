
import React, {useState, useEffect} from 'react';
import '../styles/home.css';
import { Col, Container, Row } from 'reactstrap';
import products from '../assets/data/products';

import Helmet from '../components/Helmet/Helmet';

import heroImg from '../assets/images/hero-img.png';
import counterImg from '../assets/images/counter-timer-img.png';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import Services from '../services/Services';
import ProductsList from '../components/Ui/ProductsList';
import Clock from '../components/Ui/Clock';

const Home = () => {

    const [tredingProducts, setTredingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    
    const year = new Date().getFullYear();

    useEffect(()=>{
        const filterTrendingProducts = products.filter(item => item.category === 'chair');
        const filterBestSalesProducts = products.filter(item => item.category === 'sofa');
        const filterMobileProducts = products.filter(item => item.category === 'mobile');
        const filterWirelessProducts = products.filter(item => item.category === 'wireless');
        const filterPopularProducts = products.filter(item => item.category === 'watch');
        setTredingProducts(filterTrendingProducts);
        setBestSalesProducts(filterBestSalesProducts);
        setMobileProducts(filterMobileProducts);
        setWirelessProducts(filterWirelessProducts);
        setPopularProducts(filterPopularProducts);
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
                                <img src={heroImg} alt='logo' />
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

            <section className="timer__count">
                <Container>
                    <Row>
                        <Col lg='6' md='12' className='count__down-col'>
                            <div className="clock__top-content">
                                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                                <h3 className='text-white fs-5 ьи-3'>Quality Armchair</h3>
                            </div>
                            <Clock />
                            <motion.button whileTap={{scale:1.1}} className='buy__btn store__btn'>
                                <Link to="/shop">Visit Store</Link>
                            </motion.button>
                        </Col>
                        <Col lg='6' md='12' className='text-end counter__img'>
                            <img src={counterImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="new__arrivals">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section__title mb-5">New Arrivals</h2>
                        </Col>
                        <ProductsList data={mobileProducts} />
                        <ProductsList data={wirelessProducts} />
                    </Row>
                </Container>
            </section>

            <section className="popular__category">
            <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section__title mb-5">Popular in Category</h2>
                        </Col>
                        <ProductsList data={popularProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}

export default Home;
