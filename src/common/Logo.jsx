import React from 'react';

// import LogoImg from '../../public/assets/images/logo/logo.png';
import LogoImg from '../../public/assets/images/logo/png1.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return   (
        <>
            <Link to="/" className="link">
                <img src={LogoImg} style={{height : "100px", width : "auto"}} alt="Logo"/>
            </Link>
        </>
    );
};

export default Logo;    