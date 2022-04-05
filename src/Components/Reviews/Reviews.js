import React from 'react';
import './Reviews.css'
import { BsChatSquareQuote } from 'react-icons/bs';
import CustomerReviews from '../../Hooks/CustomerReviews';
import Review from '../Review/Review';
import { Spinner } from 'react-bootstrap';


const Reviews = () => {
    const [reviews, setReviews] = CustomerReviews();

    return (
        <div>
            <p className='review-heading'>User's Reviews</p>
            <div className='all-reviews'>
                {
                    reviews ? 
                    reviews.map(review => <Review key={review.id} review={review}></Review>)

                    : <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                }

                

            </div>
        </div>
    );
};

export default Reviews;