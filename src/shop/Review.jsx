import React, { useState } from 'react';
import Ratting from '../components/Ratting';
import products from '../products.json';


const reviewtitle = "Add a Review";

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jan 16, 2024 at 6:45 am",
        desc: "Like all Adidas trainers, these well designed, light, classy and classic yet the unique color give it a modern day flair!",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Dec 10, 2023 at 8:57 am",
        desc: "The style and rich green color. Have had several compliments.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2023 at 9:54 am",
        desc: "Fit great and comfortable, nice design, Perfect for training.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Oct 13, 2023 at 5:57 am",
        desc: "Well structured, feels supportive in all the right places when doing your workouts. Spacing is just right allowing for a little give in lateral moves but still supportive.",
    },
];

const Review = () => {
    
    const [reviewShow , setReviewShow] = useState(true);
    

    
    return (
    <>
       <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
        <li className='desc mt-3 ms-3 me-3' onClick={() => setReviewShow(!reviewShow)}>Description</li>
        <li className='rev mt-3' onClick={() => setReviewShow(!reviewShow)}>Reviews</li>
       </ul>
       {/* desc review content*/}
       <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
        <div className='review-showing'>
      
      
       <ul className='content lab-ul mt-3'>
        {
            ReviewList.map((review , i) => (
                <li key={i}>
                    <div className='post-thumb'>
                        <img src={review.imgUrl} alt=''/>
                    </div>
                    <div className="post-content">
                        <div className='entry-meta'></div>
                        <div className="posted-on">
                            <a href='#'>{review.name}</a>
                            <p>{review.date}</p>
                        </div>
                        <div className='entry-content'>
                            <p> {review.desc}</p>
                        </div>
                    </div>
                </li>
            ))
        }
       </ul>
        <div className='client-review'>
            <div className="review-form">
                <div className='review-title'>
                    <h5>{reviewtitle}</h5>
                </div>
                <form action='action' className='row'>
                    <div className='col-md-4 col-12'>
                        <input type="text" name='name' id='name'  placeholder='Full Name*'/>
                    </div>
                    <div className='col-md-4 col-12'>
                        <input type="email" name='email' id='email'  placeholder='Your Email*'/>
                    </div>
                    <div className='rating'>
                        <div className='me-2'>
                       <span>Your Review</span>
                       
                       <Ratting/>
                       </div>
                    </div>
                    <div className='col-md-12 col-12'>
                        <textarea name='message' id='message' rows="8" placeholder='Write Your Review'></textarea>
                    </div>
                    <div className='col-12'>
                        <button type='submit' className='default-button'>
                            <span>Submit Review</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
          <div className="description">
        
         <p> Relive the iconic adidas Samba legacy with a modern twist in these playful shoes. Issued in collaboration with KSENIASCHNAIDER, they feature a reworked textile upper, premium embroidered 3-Stripes and a stitched toe cap for heritage-inspired style. The gum rubber outsole, enhanced with contemporary structures, provides an elevated and versatile finish, ready for the city adventures of today</p>
          
                    
          </div>
          </div>
    </>
    )
}

export default Review;

