import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import AadaMedium from './AadaMedium/AadaMedium';
import LatestAada from './LatestAada/LatestAada';
import Platform from './LatestAada/Platform';
import OurPartners from './OurPartners/OurPartners';
import UseCase from './UseCase/UseCase';
import WhyAada from './WhyAada/WhyAada';


const Home = () => {
    return (
        <div>
            <Header/>
            <UseCase/>
            <WhyAada/>
            <LatestAada/>
            <Platform/>
            <AadaMedium/>
            <OurPartners/>
            <Footer/>
        </div>
    );
};

export default Home;