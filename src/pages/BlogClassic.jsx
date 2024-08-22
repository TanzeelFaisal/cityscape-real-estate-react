import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import BlogClassicSection from '../components/BlogClassicSection';
import PageTitle from '../common/PageTitle';

const BlogClassic = () => {
    return (
        <>
        <PageTitle title="Anila Apartments - Blog Classic" />

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
                pageTitle="Blog Classic"
                pageName="Blog Classic"
            /> */}

            <BlogClassicSection/> 

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default BlogClassic;