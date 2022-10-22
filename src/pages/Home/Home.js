import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import HeroSection from './HeroSection';
import ThemeButton from '../Shared/ThemeButton';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;