import React, { useState } from 'react';
import PropertyItem from './items/PropertyItem';
import { properties } from '../data/HomeOneData/HomeOneData';
import Pagination from '../common/Pagination';
import PropertyFilterBottom from './PropertyFilterBottom';
import PropertyFilterForm from './PropertyFilterForm';

const PropertyPageSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 4;

    // Calculate the total number of pages
    const totalPages = Math.ceil(properties.length / propertiesPerPage);

    // Calculate the properties to be displayed on the current page
    const startIndex = (currentPage - 1) * propertiesPerPage;
    const selectedProperties = properties.slice(startIndex, startIndex + propertiesPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <section className="property bg-gray-100 padding-y-120">
                <div className="container container-two">

                    {/* Property Filter */}
                    <div className="property-filter">
                        <PropertyFilterForm />
                        <PropertyFilterBottom />
                    </div>

                    <div className="list-grid-item-wrapper property-item-wrapper show-two-item row gy-4">
                        {
                            selectedProperties.map((property, index) => (
                                <div className="col-lg-4 col-sm-6" key={index}>
                                    <PropertyItem
                                        itemClass="property-item style-two style-shaped"
                                        btnClass="text-gradient fw-semibold"
                                        property={property}
                                        badgeText="Sales"
                                        badgeClass="property-item__badge"
                                        iconsClass="text-gradient"
                                        btnRenderBottom={true}
                                        btnRenderRight={false}
                                    />
                                </div>
                            ))
                        }
                    </div>

                    {/* Pagination */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />

                </div>
            </section>
        </>
    );
};

export default PropertyPageSection;
