import React, { useContext } from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import { MobileMenuContext } from '../contextApi/MobileMenuContext';
import { ScrollHideContext } from '../contextApi/ScrollHideContext';

const MobileMenu = () => {
    const { isMobileMenuOpen, handleMobileMenuClose } = useContext(MobileMenuContext);
    const { handleScrollHideClose } = useContext(ScrollHideContext);

    console.log('MobileMenu render:', { isMobileMenuOpen });

    return (
        <>
            <div className={`side-overlay ${isMobileMenuOpen ? 'show' : ''}`} onClick={() => { handleMobileMenuClose(); handleScrollHideClose(); }}></div>
            <div className={`mobile-menu d-lg-none d-block ${isMobileMenuOpen ? 'active' : ''}`}>
                <button type="button" className="close-button" onClick={() => { handleMobileMenuClose(); handleScrollHideClose(); }}>
                    <i className="las la-times"></i>
                </button>
                <div className="mobile-menu__inner">
                    <Logo />
                    <div className="mobile-menu__menu">
                        <NavMenu navMenusClass="nav-menu--mobile" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
