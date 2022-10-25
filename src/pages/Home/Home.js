import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import HeroSection from './HeroSection';
import TopCategories from './TopCategories';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <TopCategories></TopCategories>
            <Footer></Footer>
        </div>
    );
};

export default Home;