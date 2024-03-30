import React from 'react'
import { Link } from 'react-router-dom';
const title = "Most Popular Post";

const postList = [ 
    {
        id: 1,
        imgUrl: '/src/assets/images/blog/blogbott.jpg',
        imgAlt: 'rajibraj91',
        title: '"15 best reusable water bottles to help ditch single-use plastics',
        date: 'Jun 05,2022',
    },
    {
        id: 2,
        imgUrl: '/src/assets/images/blog/blogbag.jpg',
        imgAlt: 'rajibraj91',
        title: 'How to Choose the Right Backpack for Your Outdoor Adventures',
        date: 'Jan 10,2023',
    },
    {
        id: 3,
        imgUrl: '/src/assets/images/blog/blogtrack.jpg',
        imgAlt: 'rajibraj91',
        title: '10 Stylish Ways to Wear Track Pants Beyond the Gym',
        date: 'Sep 15,2023',
    },
    {
        id: 4,
        imgUrl: '/src/assets/images/blog/blogshoes.jpg',
        imgAlt: 'rajibraj91',
        title: 'The Ultimate Guide to Finding the Perfect Fit: Tips for Shoe Shopping Online',
        date: 'Feb 14,2024',
    },
]

const PopularPost = () => {
    return (
        
        <div className=" widget widget-post">
            <div className="widget-header">
                <h5 className='title'>{title}</h5>
            </div>

            <ul className='widget-wrapper'>
                {
                    postList.map((blog, i) => (
                        <li key={i} className='d-flex justify-content-between'>
                            <div className='post-thumb'>
                                <Link to={`/blog/${blog.id}`} >
                                 <img src={blog.imgUrl} alt=""/>
                                </Link>

                            </div>
                            <div className='post-content'>
                                <Link  to={`/blog/${blog.id}`}><h5>{blog.title}</h5>
                               
                                </Link>
                                <p> { blog.date}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PopularPost