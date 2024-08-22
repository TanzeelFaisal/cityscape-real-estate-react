import React from 'react';
import Header from '../common/Header';
import FooterTwo from '../common/FooterTwo';
import Cta from '../components/Cta';
import AboutThree from '../components/AboutThree';
import PropertyTypeThree from '../components/PropertyTypeThree';
import PageTitle from '../common/PageTitle';

const AboutUs = () => {
    return (
        <>
            <PageTitle title="Anila Apartments - About Us" />
            
            {/* Header */}
            <Header 
                headerClass="" 
                logoBlack={true}
                logoWhite={false}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-light d-lg-block d-none"
                btnLink="/add-new-listing"
                btnText="Add Listing"
                spanClass="icon-right text-gradient" 
                showHeaderBtn={false}
                showOffCanvasBtn={false}
                offCanvasBtnClass=""
                showContactNumber={false}
            />

            {/* AboutThree */}
            <AboutThree/>    

            {/* PropertyTypeThree */}
            <PropertyTypeThree/> 

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <FooterTwo/>
        </>
    );
};

export default AboutUs;
