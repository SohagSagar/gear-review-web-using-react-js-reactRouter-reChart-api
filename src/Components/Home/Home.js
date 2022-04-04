import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerReviews from '../../Hooks/CustomerReviews';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = CustomerReviews();

    let navigate = useNavigate();
    const seeAllReviews = () => {
        navigate('/reviews');
    }
    return (
        <div>
            <div className='container'>

                <section className='home-container'>
                    <div className="feature-products">
                        <div className="feature-title">
                            <p>Your Next Gear</p>
                            <p><span>With Amazing Features</span></p>
                        </div>
                        <p className='feature-details'>Newly developed 30.0 MP 16 35mm full-frame Exmor R™ CMOS sensor and enhanced image processing.Phenomenal AF performance and 10 fps 17 continuous shooting.Full-frame 4K HDR 18 19 movie recording and pro-class movie features</p>
                        <button className=' detail-btn'>Live Demo</button>
                    </div>
                    <div className="feature-products-img">
                        <img src="./gear-1.jpg" alt="" />
                    </div>
                </section>
            </div>
            {/* customer review section */}
            <section>
                <div className="customer-reviews">
                    <p className='review-heading'>User's Reviews</p>
                    <div className="container">
                        {
                            reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                        }
                    </div>
                    <button onClick={seeAllReviews} className='all-review-btn'>See All Reviews</button>
                </div>

            </section>




        </div>
    );
};

export default Home;