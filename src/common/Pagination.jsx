import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page) => {
        onPageChange(page);
    };

    return (
        <div className="pagination-container">
            <style jsx>{`
                .pagination-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 20px;
                    padding-top: 20px;
                    padding-bottom: 20px;
                }
                .pagination {
                    display: flex;
                    justify-content: center;
                    padding-left: 0;
                    list-style: none;
                    border-radius: 0.25rem;
                }
                .page-item {
                    margin: 0 5px;
                }
                .page-link {
                    position: relative;
                    display: block;
                    padding: 0.5rem 0.75rem;
                    margin-left: -1px;
                    line-height: 1.25;
                    color: #fd7e14;
                    background-color: #fff;
                    border: 1px solid #fd7e14;
                    border-radius: 0.25rem;
                    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                }
                .page-link:hover {
                    z-index: 2;
                    color: #fff;
                    text-decoration: none;
                    background-color: #fd7e14;
                    border-color: #fd7e14;
                }
                .page-item.active .page-link {
                    z-index: 1;
                    color: #fff;
                    background-color: #fd7e14 ;
                    border-color:#fd7e14;
                }
                .page-item button[disabled] {
                    cursor: not-allowed;
                    opacity: 0.5;
                }
            `}</style>
            <ul className="pagination">
                <li className="page-item">
                    <button onClick={handlePrevious} disabled={currentPage === 1} className="page-link">
                        Previous
                    </button>
                </li>
                {[...Array(totalPages).keys()].map((_, index) => {
                    const page = index + 1;
                    return (
                        <li className={`page-item ${currentPage === page ? 'active' : ''}`} key={page}>
                            <button onClick={() => handlePageClick(page)} className="page-link">
                                {page}
                            </button>
                        </li>
                    );
                })}
                {currentPage < totalPages && (
                    <li className="page-item">
                        <button onClick={handleNext} disabled={currentPage === totalPages} className="page-link">
                            Next
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Pagination;
