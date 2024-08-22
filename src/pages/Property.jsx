import React from 'react';
import Header from '../common/Header';
import FooterTwo from '../common/FooterTwo';
import Breadcrumb from '../common/Breadcrumb';
import PropertyPageSection from '../components/PropertyPageSection';
import Cta from '../components/Cta';
import PageTitle from '../common/PageTitle';

const Property = () => {
    return (
        <>
        <PageTitle title="Anila Apartments - Property" />

        <main className="body-bg">
            
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
                pageTitle="Property"
                pageName="Property"
            /> */}

            {/* Property Page Section */}
            <PropertyPageSection/>

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <FooterTwo/>

        </main>   
        </>
    );
};

export default Property;