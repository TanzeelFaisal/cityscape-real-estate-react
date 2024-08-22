import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { aboutCheckLists } from '../data/HomeThreeData/HomeThreeData';
import CountUp from 'react-countup';

import AboutThreeThumb from '../../public/assets/images/thumbs/about-three-img.png';

const AboutThree = () => {
    return (
        <>
            <section className="about-three bg-white padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="about-three-thumb">
                                <div className="about-three-thumb__inner">
                                    <img src={AboutThreeThumb} alt=""/>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">

                                <SectionHeading
                                    headingClass="style-left"  
                                    subtitle="About Us"
                                    subtitleClass="bg-gray-100" 
                                    title="Welcome to Anila Apartments, your premier destination for luxurious living and exceptional comfort in Shëngjin, Albania." 
                                    renderDesc={true}
                                    desc="At Anila Apartments, we pride ourselves on providing a variety of rental and purchase options to meet your needs. Whether you're looking for a temporary getaway or a permanent residence, our properties are designed to exceed your expectations with their upscale furnishings, contemporary amenities, and inviting atmosphere. 
                                    Located in the heart of Shëngjin, our properties offer easy access to the beach, local attractions, and a vibrant community. Whether you're here for a relaxing vacation or looking to make Shëngjin your home, Anila Apartments provides an unparalleled living experience."
                                    renderButton={false}
                                    buttonClass="btn-main"
                                    buttonText="View More"
                                />

                                <ul className="check-list style-two">
                                    {
                                        aboutCheckLists.map((aboutCheckList, index) => {
                                            return (
                                                <li className="check-list__item d-flex align-items-center" key={index}>
                                                    <span className="icon">{aboutCheckList.icon}</span>
                                                    <span className="text fw-semibold">{aboutCheckList.text}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="about-button">
                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default AboutThree;