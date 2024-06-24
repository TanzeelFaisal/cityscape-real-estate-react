import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import PropertyDetailsSection from '../components/PropertyDetailsSection';
import ContactUsSection from '../components/ContactUsSection';
import { useParams, useLocation } from 'react-router-dom';
import PageTitle from '../common/PageTitle';

const PropertyDetails = () => {

    const {title} = useParams();
    const {dataStatuses} = useLocation().state;
    console.log(dataStatuses)
    
    return (
        <>
        <PageTitle title="CityScape - Property Details" />

            {/* Header */}
            <Header 
                headerClass="dark-header has-border" 
                logoBlack={false}
                logoWhite={true}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
                btnLink="/add-new-listing"
                btnText="Add Listing"
                spanClass="icon-right text-gradient" 
                showHeaderBtn={true}
                showOffCanvasBtn={false}
                offCanvasBtnClass=""
                showContactNumber={false}
            />

            {/* BreadCrumb */}
            {/* <Breadcrumb 
                pageTitle="Property Details"
                pageName={title}
            /> */}

            {/* Property Details Section */}
            <PropertyDetailsSection/>

            {/* Contact */}
            <ContactUsSection dataStatuses={dataStatuses}/>

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default PropertyDetails;
