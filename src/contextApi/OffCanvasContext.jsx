import React, { createContext, useState } from 'react';

export const OffCanvasContext = createContext();

const OffCanvasProvider = ({ children }) => {
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

    const handleOffCanvas = () => {
        console.log('OffCanvas toggled');
        setIsOffCanvasOpen(!isOffCanvasOpen);
    };

    const handleOffCanvasClose = () => {
        console.log('OffCanvas closed');
        setIsOffCanvasOpen(false);
    };

    console.log({ isOffCanvasOpen, handleOffCanvas, handleOffCanvasClose });

    return (
        <OffCanvasContext.Provider value={{ isOffCanvasOpen, handleOffCanvas, handleOffCanvasClose }}>
            {children}
        </OffCanvasContext.Provider>
    );
};

export default OffCanvasProvider;
