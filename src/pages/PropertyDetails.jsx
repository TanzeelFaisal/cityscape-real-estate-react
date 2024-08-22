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

    const property_data = useLocation().state;
    
    return (
        <>
        <PageTitle title="Anila Apartments - Property Details" />

            {/* Header */}
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

            {/* BreadCrumb */}
            {/* <Breadcrumb 
                pageTitle="Property Details"
                pageName={title}
            /> */}

            {/* Property Details Section */}
            <PropertyDetailsSection/>

            {/* Contact */}
            <ContactUsSection property_data={property_data}/>

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default PropertyDetails;
