import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import { useLocation } from 'react-router-dom';
import BlogDetailsSection from '../components/BlogDetailsSection';
// import { BlogDataContext } from '../contextApi/BlogDataContext';
import PageTitle from '../common/PageTitle';

const BlogDetails = () => {

    const location = useLocation(); 
    
    return (
        <>
            <PageTitle title="Anila Apartments - Blog Details" />

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
                showHeaderBtn={true}
                showOffCanvasBtn={false}
                offCanvasBtnClass=""
                showContactNumber={false}
            />

            {/* BreadCrumb */}
            {/* <Breadcrumb 
                pageTitle="Blog Details"
                pageName={location.state.title}
            /> */}

            <BlogDetailsSection/>

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default BlogDetails;

