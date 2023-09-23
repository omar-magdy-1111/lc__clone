import React from 'react';
import '../../../styleSheet/Home_CSS/Category.css';
import { Link } from 'react-router-dom';

function Category() {
    return (
        <div className='Category '>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='sub-merch-group col-lg-8'>
                        <h1 className='head-name '>Categories</h1>
                        <ul className='p-0'>
                            <li ><Link to={ '/LCstore' }>
                                <img src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-egen-circle3.jpg' className='img-fluid' alt='...'></img>
                                <h3>category name</h3>  </Link>
                            </li>
                            <li ><Link to={ '/LCstore' }>
                                <img src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-egen-circle2.jpg' className='img-fluid' alt='...'></img>
                                <h3>category name</h3></Link>
                            </li>
                            <li ><Link to={ '/LCstore' }>
                                <img src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-egen-circle1.jpg' className='img-fluid' alt='...'></img>
                                <h3>category name</h3></Link>
                            </li>
                            <li ><Link to={ '/LCstore' }>
                                <img src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-egen-circle4.jpg' className='img-fluid' alt='...'></img>
                                <h3>category name</h3></Link>
                            </li>
                            <li><Link to={ '/LCstore' }>
                                <img src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-egen-circle5.jpg' className='img-fluid' alt='...'></img>
                                <h3>category name</h3></Link>
                            </li>
                            <li><Link to={ '/LCstore' }>
                                <img src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-egen-circle6.jpg' className='img-fluid' alt='...'></img>
                                <h3>category name</h3></Link>
                            </li>
                            <li><Link to={ '/LCstore' }>
                                <img src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-egen-circle7.jpg' className='img-fluid' alt='...'></img>
                                <h3>category name</h3></Link>
                            </li>
                            <li><Link to={ '/LCstore' }>
                                <img src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-egen-circle8.jpg' className='img-fluid' alt='...'></img>
                                <h3>category name</h3></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='currently-story row col-lg-4 mx-auto'>
                        <img className='img-fluid col my-2' src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-egen-sideslider-1.jpg' alt='...' />
                        <img className='img-fluid col my-2' src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-egen-sideslider-2.jpg' alt='...' />
                    </div>
                    <div className='discover row mx-auto'>
                      <Link to={ '/LCstore' }className='my-2  col-md-6'>  <img src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-r-egen-content3.jpg' className='img-fluid ' alt='...' /></Link>
                      <Link to={ '/LCstore' }className='my-2  col-md-6'>  <img src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-r-egen-content4.jpg' className='img-fluid ' alt='...' /></Link>
                      <Link to={ '/LCstore' }className='my-2  col-md-6'>  <img src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-r-egen-content5.jpg' className='img-fluid ' alt='...' /></Link>
                      <Link to={ '/LCstore' }className='my-2  col-md-6'>  <img src='https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-r-egen-content6.jpg' className='img-fluid ' alt='...' /></Link>
                    </div>
                    <div className='inner-header'>
                        
                        <div className="main">
                            <div className="d1"></div>
                            <div className="d2"></div>
                            <div className="d3"></div>
                            <div className="d4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Category;