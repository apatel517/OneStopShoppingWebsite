import React from 'react';
import { Link } from 'react-router-dom';

const title = "About PatelCart";
const desc = "ShoppingCart is a leading online marketplace that offers a wide range of products catering to various needs of customers. From electronics to fashion, home decor. ShoppingCart has everything you need at your fingertips.";
const quickTitle = "Quick Links";
const Itemtitle = "Categories";
const tweetTitle = "Recent Tweets";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: 'Chicago, USA.',
    },
    {
        iconName: 'icofont-phone',
        text: '+19812452620',
    },
    {
        iconName: 'icofont-envelope',
        text: 'info@shoppingcart.com',
    },
];

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
];

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    },
];
const tweetList = [
    {
        iconName: 'icofont-twitter',
        desc: 'Asad Patel @ShoppingCart Greetings! #HTML_Template Grab your item, 50% Big Sale Offer !!',
    },
    {
        iconName: 'icofont-twitter',
        desc: 'Ansa Patel @ShoppingCart Hey! #HTML_Template Grab your item, 50% Big Sale Offer !!',
    },
];
const footerbottomList = [{ text: 'Faculty', link: '#', }, { text: 'Staff', link: '#', }, { text: 'Students', link: '#', }, { text: 'Alumni', link: '#', },]

const quickList = [
    {
        text: 'Summer Sessions',
        link: '#',
    },
    {
        text: 'Events',
        link: '#',
    },
    {
        text: 'Gallery',
        link: '#',
    },
    {
        text: 'Forums',
        link: '#',
    },
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms of Use',
        link: '#',
    },
];

const Footer = () => {
    return (
        <footer className='style-2'>
            <div className='footer-top dark-view padding-tb'>
                <div className='container'>
                    <div className='row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center'>
                        <div className='col'>
                            <div className='footer-item our-address'>
                                <div className='footer-inner'>
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{title}</h4>
                                        </div>
                                        <div className="content">
                                            <p> {desc}</p>
                                            <ul className='lab-ul office-address'>
                                                {addressList.map((val, i) => (
                                                    <li key={i}>
                                                        <i className={val.iconName}>{val.text}</i>
                                                    </li>
                                                ))}
                                            </ul>
                                            <ul className='lab-ul social-icons'>
                                                {socialList.map((val, i) => (
                                                    <li key={i}>
                                                        <a href='#' className={val.className}><i className={val.iconName}>{val.text}</i></a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='footer-item our-address'>
                                <div className='footer-inner'>
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{quickTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className='lab-ul office-address'>
                                                {quickList.map((val, i) => (
                                                    <li key={i}>
                                                        <a href='#'>{val.text}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='footer-item'>
                                <div className='footer-inner'>
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{Itemtitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className='lab-ul office-address'>
                                                {ItemList.map((val, i) => (
                                                    <li key={i}>
                                                        <a href={val.link}>{val.text}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='footer-item'>
                                <div className='footer-inner'>
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{tweetTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className='lab-ul office-address'>
                                                {
                                                    tweetList.map((val, i) => (
                                                        <li key={i}>
                                                            <i className={val.iconName}></i>
                                                            {val.desc}
                                                        </li>


                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*footer bottom */}

            <div className="footer-bottom">
                <div className="container">
                    <div className="section-wrapper">
                        <p>&copy; 2024 <Link to="/">Shopping Cart</Link>Designed by <a href="/" target='_blank'>Asad Patel</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

