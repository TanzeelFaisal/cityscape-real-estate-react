import React, { useRef, useEffect } from 'react';
import { toSingular } from '../utility/Utility';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const ContactUsSection = (props) => {
    const form = useRef();
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);
    const messageRef = useRef(null);
    const subjectRef = useRef(null);

    useEffect(() => {
        updateMessage();
    }, [props.property_data?.dataStatuses]);

    const updateMessage = () => {
        const dataStatuses = props.property_data?.dataStatuses || '';
        const dataTypes = props.property_data?.dataTypes || '';
        const location = props.property_data?.location || '';
        const start = startDateRef.current ? startDateRef.current.value : null;
        const end = endDateRef.current ? endDateRef.current.value : null;

        let message = '';
        if (dataStatuses === "Rent" && start && end) {
            message = `I am interested in ${dataStatuses}ing an ${toSingular(dataTypes)} at ${location} from ${start} to ${end}.`;
            messageRef.current.disabled = false;
        } else if (dataStatuses === "Buy") {
            message = `I am interested in ${dataStatuses}ing an ${toSingular(dataTypes)} at ${location}.`;
        }
        if (messageRef.current) {
            messageRef.current.value = message;
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
            form.current,
            'YOUR_USER_ID' // Replace with your EmailJS user ID
        ).then(
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
                console.log('FAILED...', error);
            }
        );
    };

    const sendAxiosRequest = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);

        if (props.property_data?.dataStatuses) { formData.append('user_subject', props.property_data?.dataStatuses || ''); }

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post('http://api.anilaapartments.com/contact', formData, axiosConfig)
            .then(response => {
                console.log(response.data);
                toast.success("Query received successfully.", {
                    theme: "colored",
                });
                form.current.reset();
                updateMessage();
                if(props.property_data?.dataStatuses === "Rent") messageRef.current.disabled = true
            })

            .catch(error => {
                console.error('Error sending email:', error);
                toast.error("Error generating query.", {
                    theme: "colored",
                });
            });
    };

    return (
        <>
            <ToastContainer />
            <section className="contact-us-section padding-b-120">
                <div className="container container-two">
                    <div className="contact-form bg-white">
                        <div className="section-heading">
                            <span className="section-heading__subtitle bg-gray-100">
                                <span className="text-gradient fw-semibold">Contact us</span>
                            </span>
                            <h2 className="section-heading__title">Booking Now </h2>
                            
                        </div>
                        <div className="contact-form__form">
                            <form ref={form} onSubmit={sendAxiosRequest} className="contact-form__form">
                                <div className="row gy-4">
                                    <div className="col-sm-6 col-xs-6">
                                        {props.property_data?.dataStatuses && <span>Name</span>}
                                        <input type="text" className="common-input" name='user_name' placeholder="Your Name" />
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        {props.property_data?.dataStatuses && <span>Email</span>}
                                        <input type="email" className="common-input" name='user_email' placeholder="Your E-mail" />
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        {props.property_data?.dataStatuses && <span>Phone</span>}
                                        <input type="tel" className="common-input" name='user_phone' placeholder="Phone Number" />
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        {props.property_data?.dataStatuses && <span>Subject</span>}
                                        <input type="text" className="common-input" name='user_subject' placeholder="Subject" value={props.property_data?.dataStatuses} disabled={props.property_data?.dataStatuses ? true : false} />
                                    </div>
                                    {props.property_data?.dataStatuses === "Rent" && (
                                        <>
                                            <div className="col-sm-6 col-xs-6">
                                                <span>From</span>
                                                <input type="date" className="common-input" ref={startDateRef} onChange={updateMessage} />
                                            </div>
                                            <div className="col-sm-6 col-xs-6">
                                                <span>To</span>
                                                <input type="date" className="common-input" ref={endDateRef} onChange={updateMessage} />
                                            </div>
                                        </>
                                    )}
                                    <div className="col-12">
                                        <textarea className="common-input" name='message' ref={messageRef} placeholder="Your Message" disabled={props.property_data?.dataStatuses === "Rent" && (!startDateRef.current?.value || !endDateRef.current?.value) ? true : false }></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-main w-100" onClick={sendAxiosRequest}>Submit Now</button>
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
