import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import GoogleMap from '../components/GoogleMap';

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send Your Message";

const contactList = [
    { imgUrl: "/src/assets/images/icon/01.png", imgAlt: "contact icon", title: "Office Address", desc: "123 Shopping Street", },
    { imgUrl: "/src/assets/images/icon/02.png", imgAlt: "contact icon", title: "Phone number", desc: "+1 981-245-2620 ", },
    { imgUrl: "/src/assets/images/icon/03.png", imgAlt: "contact icon", title: "Send email", desc: "info@shoppingcart.com", },
    { imgUrl: "/src/assets/images/icon/04.png", imgAlt: "contact icon", title: "Our website", desc: "www.shoppingcart.com", },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate successful form submission
        setIsSubmitted(true);
    };

    return (
        <div>
            <PageHeader title={"Get In Touch With Us"} curPage={"Contact Us"} />
            <div className="map-address-section padding-tb section-bg">
                <div className="container">
                    <div className="section-header text-center">
                        <span className='subtitle'>{subTitle}</span>
                        <h2 className='title'>{title}</h2>
                    </div>

                    <div className="section-wrapper">
                        <div className="row flex-row-reverse">
                            <div className="col-xl-4 col-lg-5 col-12">
                                <div className="contact-wrapper">
                                    {contactList.map((val, i) => (
                                        <div key={i} className='contact-item'>
                                            <div className="contact-thumb">
                                                <img src={val.imgUrl} alt={val.imgAlt} />
                                            </div>
                                            <div className="contact-content">
                                                <h6 className='title'>{val.title}</h6>
                                                <p className="desc">{val.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* google map */}
                            <div className="col-xl-8 col-lg-7 col-12">
                                <GoogleMap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-section padding-tb">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">{conSubTitle}</span>
                        <h2 className="title">{conTitle}</h2>
                    </div>
                    <div className="section-wrapper">
                        {!isSubmitted ? (
                            <form className='contact-form' onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" name='name' id='name' placeholder='Your Name*' value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <input type="email" name='email' id='email' placeholder='Your Email*' value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <input type="number" name='number' id='number' placeholder='Your Phone Number*' value={formData.number} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name='subject' id='subject' placeholder='Subject*' value={formData.subject} onChange={handleChange} required />
                                </div>
                                <div className="form-group w-100">
                                    <textarea name="message" id="message" placeholder='Your Message' rows="8" value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <div className="form-group w-100 text-center">
                                    <button className='lab-btn' type="submit">
                                        <span>{btnText}</span>
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="success-message text-center">
                                <h4>Thank You for Contacting Us!</h4>
                                <p>Your message has been successfully sent. We'll get back to you soon.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
