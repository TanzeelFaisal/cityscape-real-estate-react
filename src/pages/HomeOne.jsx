import React from 'react';
import TopHeader from '../common/TopHeader';
import Header from './../common/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import PropertyType from '../components/PropertyType';
import VideoPopup from '../components/VideoPopup';
import Counter from './../components/Counter';
import Blog from './../components/Blog';
import FooterTwo from './../common/FooterTwo';
import Message from './../components/Message';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';
import PageTitle from '../common/PageTitle';

const HomeOne = () => {
    return (
        <>
         <PageTitle title="Anila Apartments - Home Page" />
            <OffCanvas/>
            <MobileMenu/>
            
            <main className="body-bg">

                {/* Header */}
                <Header 
                    headerClass="" 
                    logoBlack={true}
                    logoWhite={false}
                    headerMenusClass="mx-auto"
                    btnClass="btn btn-outline-main-light d-lg-block d-none"
                    btnLink=""
                    btnText=""
                    spanClass="icon-right text-gradient" 
                    showHeaderBtn={false}
                    showOffCanvasBtn={false}
                    offCanvasBtnClass=""
                    showContactNumber={false}
                />

                {/* Banner */}
                <Banner/>
                
                {/* About */}
                <About/>

                {/* Property Type */}
                <PropertyType/>

                {/* Video Popup */}
                <VideoPopup/>

                {/* Counter */}
                <Counter/>

                {/* Message */}
                <Message/>

                {/* Blog */}
                <Blog/>

                {/* FooterTwo */}
                <FooterTwo/>
                
            </main>
        </>
    );
};

export default HomeOne;
