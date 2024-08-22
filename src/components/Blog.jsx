import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { blogs } from '../data/HomeOneData/HomeOneData';
import BlogItem from './items/BlogItem';

const Blog = () => {
    return (
        <>
            {/* ==================== Blog Start Here ==================== */}
            <section className="blog padding-t-60 padding-b-120">
                <div className="container container-two">

              

                    <div className="row gy-4">
                        {
                            blogs.slice(0, 3).map((blog, index) => {
                                return (
                                    <div >
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
            </section>
            {/* ==================== Blog End Here ==================== */}   
        </>
    );
};

export default Blog;