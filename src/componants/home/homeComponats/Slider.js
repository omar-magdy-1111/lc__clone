import React from 'react';
import '../../../styleSheet/Home_CSS/Slider.css'

function Slider() {
    return (
        <div className='Slider '>
            <div className='img-container'><img className='image1 img-fluid' src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-egen-content1.jpg' alt='...' /></div>       
            <div className='img-container'><img className='image2 img-fluid' src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-egen-content2.jpg' alt='...' /></div>
            <div className='img-container'><img className='image3 img-fluid' src='https://www.myself.ae/wp-content/uploads/job-manager-uploads/featured_image/2019/01/19598854_805528972943528_209677797348748189_n.jpg' alt='...' /></div>
        </div>
    );
}

export default Slider;