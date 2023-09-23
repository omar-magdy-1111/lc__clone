import React from 'react';
import Header from '../navBar/Header';
import Slider from './homeComponats/Slider';

import Category from './homeComponats/Category';
import Brands from './homeComponats/Brands';
import Footer from './homeComponats/Footer';

function Home() {
    return (
        <div className='Home'>
            <Header />
            <Slider />
            <Category />
            <Brands />
            <Footer />
        </div>
    );
}

export default Home;