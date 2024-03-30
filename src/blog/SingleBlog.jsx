import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import blogList from "../utilis/blogdata";
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

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

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams();

    // Filter blog post by id
    const result = blog.filter((b) => b.id === Number(id));

    return (
        <div>
            <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />
            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="post-item style-2">
                                        <div className="post-inner">
                                            {result.map((item) => (
                                                <div key={item.id}>
                                                    <div className="post-thumb">
                                                        <img src={item.imgUrl} alt='' className='w-100' />
                                                    </div>
                                                    <div className="post-content">
                                                        <h2>{item.title}</h2>
                                                        <div className="meta-post">
                                                            <ul className="lab-ul row">
                                                                {item.metaList.map((val, i) => (
                                                                    <li key={i} className="col-auto">
                                                                        <i className={val.iconName}></i> {val.text}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <p>The fashion industry is a bursting money-maker, earning $1.7 trillion dollars this year alone, and that number is anticipated to rise in the future.</p>
                                                        <blockquote>
                                                            <p>The fashion industry is a bursting money-maker, earning $1.7 trillion dollars this year alone, and that number is anticipated to rise in the future.</p>
                                                            <cite>
                                                                <a href='#'>...Asad Patel</a>
                                                            </cite>
                                                        </blockquote>
                                                        <img src="/src/assets/images/blog/01.jpg" alt="" />
                                                        <div className='tag-section row'>
                                                            <ul className="tags lab-ul">
                                                            <li><a href="#">Agency</a></li>
                                                                    <li><a href="#">Business</a></li>
                                                                    <li><a href="#">Personal</a></li>
                                                            </ul>
                                                            <ul className="lab-ul social-icons list-inline">
                                                                {socialList.map((val, i) => (
                                                                    <li key={i} className="list-inline-item">
                                                                        <a href='#' className={val.className}>
                                                                            <i className={val.iconName}></i>
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="navigation-part">
                                        <div className="left">
                                            <a href="#" className='prev'>
                                                <i className="icofont-double-left"></i> Previous Blog
                                            </a>
                                            <a href="#" className='title'>Asad</a>
                                        </div>
                                        <div className="right">
                                            <a href="#" className='prev'>
                                                <i className="icofont-double-right"></i> Next Blog
                                            </a>
                                            <a href="#" className='title'>Asad</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Tags/>
                                <PopularPost/>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;


