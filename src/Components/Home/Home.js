import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <section className='container'>
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
    );
};

export default Home;