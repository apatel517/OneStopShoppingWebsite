import React from 'react';
import PageHeader from '../components/PageHeader';

const About = () => {
    return (
        <div>
            <PageHeader title={"Welcome to Patel Cart"} curPage={"About"} />
            <div className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                        {/* Introduction */}
                        <div className="col">
                            <div className="about-left">
                                <div className="section-header">
                                    <h2>Welcome to Patel Cart</h2>
                                </div>
                                <p>Patel Cart is your one-stop destination for all your shopping needs. With a wide range of products and seamless shopping experience, we strive to make your online shopping journey delightful and convenient. Explore our extensive collection and discover amazing deals on a variety of products.</p>
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="col">
                            <div className="about-right">
                                <div className="section-header">
                                    <h2>Key Features</h2>
                                </div>
                                <ul className="lab-ul">
                                    <li>Extensive Product Selection: Browse through a diverse range of products, including electronics, fashion, home essentials, and more.</li>
                                    <li>User-Friendly Interface: Enjoy a smooth and intuitive shopping experience with our user-friendly website design.</li>
                                    <li>Secure Payment Options: Shop with confidence using our secure payment gateway for safe transactions.</li>
                                    <li>Fast Shipping: Get your orders delivered to your doorstep quickly with our reliable shipping services.</li>
                                    <li>24/7 Customer Support: Need assistance? Our dedicated customer support team is available round the clock to address any queries or concerns.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works */}
            <div className="how-it-works-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="section-header">
                        <h2>How It Works</h2>
                    </div>
                    <p>Shopping at Patel Cart is simple and hassle-free. Just browse, select your desired products, add them to your cart, and proceed to checkout. With our secure payment gateway, you can complete your purchase with peace of mind. Sit back and relax as we ensure prompt delivery of your orders right to your doorstep.</p>
                </div>
            </div>

            {/* About Us */}
            <div className="about-us-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="section-header">
                        <h2>About Us</h2>
                    </div>
                    <p>Founded with a vision to revolutionize the online shopping experience, Patel Cart is committed to offering high-quality products, exceptional customer service, and unbeatable value to our customers. With years of experience in the e-commerce industry, we continuously strive to exceed your expectations and provide you with an unparalleled shopping journey.</p>
                </div>
            </div>
            <div className="call-to-action-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="section-header">
                        <h2>Start Exploring Patel Cart Today</h2>
                    </div>
                    <p>Discover incredible deals on your favorite products! Shop now and experience the convenience of online shopping like never before.</p>
                 
                </div>
            </div>

            {/* Testimonials */}
            <div className="testimonials-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="section-header">
                        <h2>Testimonials</h2>
                    </div>
                    <div className="testimonials-carousel">
                    <div className="testimonial-item">
                            <p>"Great selection of products and excellent customer service! Patel Cart is my go-to destination for online shopping." - John Doe</p>
                        </div>
                        <div className="testimonial-item">
                            <p>"I love shopping at Patel Cart! The website is easy to navigate, and the shipping is super fast. Highly recommended!" - Jane Smith</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section padding-tb ">
                <div className="container">
                    <div className="section-header">
                        <h2>Contact Information</h2>
                    </div>
                    <p className="text-dark bg-white">
                        Email: info@patelcart.com <br />
                        Phone: +1 (773) 574-9754 <br />
                        Address: 123 Patel Street,<br />
                                 Chicago,<br />
                                 Illinois,60616<br />
                                 Usa
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
