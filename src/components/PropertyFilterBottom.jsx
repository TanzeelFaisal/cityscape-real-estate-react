import React, { useContext } from 'react';
import ListGridButtons from '../common/ListGridButtons';
import { PropertyFilterContext } from '../contextApi/PropertyFilterContext';

const PropertyFilterBottom = () => {
    
    const { selectedSort, handleSortChange } = useContext(PropertyFilterContext); 

    return (
        <>
         <div className="property-filter__bottom flx-between gap-2">
          
            <div className="d-flex align-items-center gap-2">
                
                {/* List Grid Layout buttons */}
                <ListGridButtons/>
                
                
            </div>
        </div>   
        </>
    );
};

export default PropertyFilterBottom;
