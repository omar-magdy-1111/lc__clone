import React from 'react';
import '../../../styleSheet/Home_CSS/Brands.css';
import { Link } from 'react-router-dom';
function Brands() {
    return (
        <div className='Brands container-fluid'>
            <Link to={ '/LCstore' }> <div className='cards row'>
                <div className="card  col-xs-12 col-sm-5 col-md-3 " >
                    <img src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-r-egen-Collectionarea-1m.jpg" className=" img-fluid" alt="..."/>
                </div>
                <div className="card col-xs-12  col-sm-6 col-md-3 " >
                    <img src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-r-egen-Collectionarea-2m.jpg" className=" img-fluid" alt="..."/>
                </div>
                <div className="card  col-xs-12 col-sm-5 col-md-3 " >
                    <img src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-r-egen-Collectionarea-3m.jpg" className=" img-fluid" alt="..."/>
                </div>
                <div className="card  col-xs-12 col-sm-5 col-md-3 " >
                    <img src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/110523-r-egen-Collectionarea-4m.jpg" className=" img-fluid" alt="..."/>
                </div>
            </div> </Link>
        </div >
    );
}

export default Brands;