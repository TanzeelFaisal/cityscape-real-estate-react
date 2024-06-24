import React, { useRef, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const ContactUsSection = (props) => {

    const form = useRef();

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [message, setMessage] = useState('');

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
        updateMessage(event.target.value, endDate);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
        updateMessage(startDate, event.target.value);
    };

    const updateMessage = (start, end) => {
        if (start && end) {
            setMessage(`I wish to rent this place from ${start} to ${end}`);
        } else {
            setMessage('');
        }
    };

    const sendEmail = (e) => {
      e.preventDefault();
    //   Please se documentation for more information
  
      emailjs
        .sendForm(
            'service_5opdqb8', // YOUR_SERVICE_ID
            'template_tel2xio', // YOUR_TEMPLATE_ID
            form.current, {
            publicKey: 'TkEXMnREcdrQyndFz', // YOUR_PUBLIC_KEY
        })
        .then(
          () => {
            form.current.reset();
            toast.success("Congratulations! You Have Submitted Successfully.", {
                theme: "colored",
            });
            console.log('SUCCESS!');
          },
          (error) => {
            toast.error("Something went wrong! Your message didn't sent.", {
                theme: "colored",
            });
            console.log('FAILED...', error.text);
          },
        );
    };
    
    return (
        <>
            <ToastContainer/>
            <section className="contact-us-section padding-b-120">
                <div className="container container-two">
                    <div className="contact-form bg-white">  
                        <div className="section-heading">
                            <span className="section-heading__subtitle bg-gray-100"> 
                                <span className="text-gradient fw-semibold">Contact us</span>
                            </span>
                            <h2 className="section-heading__title">Do you have any question? </h2>
                            <p className="section-heading__desc">For your car we will do everything  advice, repairs and maintenance. We are the some preferred choice by many car owners because</p>
                        </div>
                        <div className="contact-form__form">

                            <form ref={form} onSubmit={sendEmail} className="contact-form__form">
                                <div className="row gy-4">
                                    <div className="col-sm-6 col-xs-6">
                                        { props.dataStatuses && <span>Name</span> }
                                        <input type="text" className="common-input" name='user_name' placeholder="Your Name"/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        { props.dataStatuses && <span>Email</span> }
                                        <input type="email" className="common-input" name='user_email' placeholder="Your E-mail"/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        { props.dataStatuses && <span>Phone</span> }
                                        <input type="tel" className="common-input" name='user_phone' placeholder="Phone Number"/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        { props.dataStatuses && <span>Subject</span> }
                                        <input type="text" className="common-input" name='user_subject' placeholder="Subject" value={ props.dataStatuses ? props.dataStatuses : "" } disabled={ props.dataStatuses ? true : false }/>
                                    </div>
                                    {props.dataStatuses === "Rent" && (
                                        <>
                                            <div className="col-sm-6 col-xs-6">
                                                <span>From</span>
                                                <input type="date" className="common-input" name="start_date" onChange={handleStartDateChange} />
                                            </div>
                                            <div className="col-sm-6 col-xs-6">
                                                <span>To</span>
                                                <input type="date" className="common-input" name="end_date" onChange={handleEndDateChange} />
                                            </div>
                                        </>
                                    )}
                                    <div className="col-12">
                                        <textarea className="common-input" name='message' placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} disabled={props.dataStatuses === "Rent" && (!startDate || !endDate)}></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-main w-100">Submit Now</button>
                                    </div>
                                </div>
                            </form>


                        </div>  
                    </div>
                </div>  
            </section>   
        </>
    );
};

export default ContactUsSection;