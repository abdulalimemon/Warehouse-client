import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import HeroSection from './HeroSection';
import TopCategories from './TopCategories';
import NewsLetter from './NewsLetter';
import Inventory from './Inventory';
import Brand from './Brand';



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <TopCategories></TopCategories>
            <Inventory></Inventory>
            <Brand></Brand>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;