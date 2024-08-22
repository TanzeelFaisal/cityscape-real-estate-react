import React, { createContext, useState } from 'react';

export const MobileMenuContext = createContext();

const MobileMenuProvider = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuClick = () => {
        console.log('Mobile menu toggled', isMobileMenuOpen);
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMobileMenuClose = () => {
        console.log('Mobile menu closed');
        setIsMobileMenuOpen(false);
    };

    console.log({ isMobileMenuOpen, handleMobileMenuClick, handleMobileMenuClose });

    return (
        <MobileMenuContext.Provider value={{ isMobileMenuOpen, handleMobileMenuClick, handleMobileMenuClose }}>
            {children}
        </MobileMenuContext.Provider>
    );
};

export default MobileMenuProvider;
