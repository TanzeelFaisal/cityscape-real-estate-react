import React from 'react';

import Header from './../common/Header';
import Banner from '../components/Banner';
import Footer from '../common/Footer';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';
import PageTitle from '../common/PageTitle';

const HomeFive = () => {
    return (
        <>
        <PageTitle title="CityScape - Home Five" />

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

             
                {/* Footer */}
                <Footer/>
                
            </main>   
        </>
    );
};

export default HomeFive;
