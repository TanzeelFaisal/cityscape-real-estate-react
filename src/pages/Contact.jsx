import React from 'react';
import Header from '../common/Header';
import FooterTwo from '../common/FooterTwo';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import ContactTop from '../components/ContactTop';
import ContactUsSection from '../components/ContactUsSection';
import PageTitle from '../common/PageTitle';
import { HelmetProvider } from 'react-helmet-async';

const Contact = () => {
    return (
        <>
            <PageTitle title="Anila Apartments - Contact Us" />

            <main className="body-bg">
                
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
                    pageTitle="Contact Us"
                    pageName="Contact Us"
                /> */}

                {/* Contact Top */}
                <ContactTop/>

                <div className="contact-map address-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11898.188215250402!2d19.599646!3d41.7949743!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDQ3JzQwLjMiTiAxOcKwMzYnMTUuOCJF!5e0!3m2!1sen!2s!4v1722459118460!5m2!1sen!2s"></iframe>
                </div>

                {/* Contact Us Section */}
                <ContactUsSection/>

                {/* Cta */}
                <Cta ctaClass=""/>

                {/* Footer */}
                <FooterTwo/>

            </main>   
        </>
    );
};

export default Contact;
