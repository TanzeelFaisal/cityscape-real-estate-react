import React from 'react';
import { Link } from 'react-router-dom';

// import LogoWhiteImage from '../../public/assets/images/logo/white-logo.png';
import LogoWhiteImage from '../../public/assets/images/logo/png1.png';

const LogoWhite = () => {
    return (
        <>
            <Link to="/" className="mobile-menu__logo">
                <img src={LogoWhiteImage} style={{height : "100px", width : "auto"}} alt="Logo"/>
            </Link>   
        </>
    );
};

export default LogoWhite;