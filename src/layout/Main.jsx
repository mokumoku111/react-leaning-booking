import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import './css/Home.css';
import Feature from '../components/Feature/Feature';
import PropertyList from '../components/Property/PropertyList';
import FeatureProperties from '../components/Feature/FeatureProperties';
import MailFooter from '../components/MailFooter/MailFooter';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Feature/>
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Homes guests love</h1>
                <FeatureProperties/>
                <MailFooter/>
            </div>
        </div>
    );
};

export default Main;