import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import LoadingAnimatio from './LoadingAnimatio';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../rtk/getproducts/productsSlice';
import '../../styleSheet/LCstore_css/productID.css';
import  UP from '../UP';
import { GoUP } from '../UP';
import { GoTools } from 'react-icons/go'
import SwalPoupap from '../productCommponant/SwalPoupap';


function Product() {
    const [ categoryName, setcategoryName ] = useState('');
    const allProducts = useSelector(state => state.getproducts);
    const dispatch = useDispatch();
    const { productID } = useParams();

    useEffect(() => {
        dispatch(getProducts());
        setcategoryName(localStorage.getItem("category"));
    }, []);
    

    return (
        <div className='ProductID container'>
            <UP/>
            { allProducts.loading && <LoadingAnimatio /> }
            <h1 className='text-center text-bg-success m-3'>Product Intro</h1>
            { allProducts?.productsList
                ?.filter((product) => {
                    return product._id === productID;
                })
                .map((product) => {
                    // destructuring
                    const { images, category } = product;
                    

                    return (
                        <div key={ product._id } className='row'>
                            <div className='images col-lg-8 '>

                                <div id="carouselExampleIndicators" className="carousel slide">
                                    <div className="carousel-indicators">
                                        { Object.keys(images).map(key => {
                                            if (key === '0') {

                                                return <button key={ Math.random() } type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={ key } aria-label={ `Slide ${key}` } className="active btn-items" aria-current="true">
                                                    <img src={ images[ key ] } alt='...' />
                                                </button>;
                                            } else {

                                                return <button key={ Math.random() } className='btn-items' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={ key } aria-label={ `Slide ${key}` }>
                                                    <img className=' img img-fluid ' src={ images[ key ] } alt='...' />
                                                </button>;
                                            }
                                        }) }
                                    </div>
                                    <div className="carousel-inner">
                                        { images.map(img => {
                                            if (img === images[ 0 ]) {
                                                return (
                                                    <div key={ Math.random() } className="carousel-item active">
                                                        <img src={ img } className="d-block w-100" alt="..." />
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <div key={ Math.random() } className="carousel-item">
                                                        <img src={ img } className="d-block w-100" alt="..." />
                                                    </div>
                                                );
                                            }
                                        }) }

                                    </div>
                                    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon bg-secondary rounded-circle" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon bg-secondary rounded-circle" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className='descripe col-lg-4  my-3 overflow-scroll ' style={ { "backgroundColor": "aliceblue" } }>
                                {/* return key of obj as new array and mapping */ }
                                { Object.keys(product).map((keys) => {
                                    let category = product[ 'category' ];
                                    localStorage.setItem("category", category);
                                    if (keys !== 'images' & keys !== '_id' && keys !== 'image') {

                                        return (

                                            <div  key={ keys } className={ `${keys} my-3 ` } >
                                                <span className='key text-primary me-2 h5'>{ keys }:</span>
                                                <span className='value text-secondary p'>{ `${product[ `${keys}` ]} ` }</span>
                                                <hr />
                                            </div>

                                        );
                                    }
                                }) }
                                <Link to={'/createUser'}  className='btn btn-warning fw-bolder w-100 my-4'>Buy Now</Link>
                                <div className="card">
                                    <h5 className="card-header">Attention</h5>
                                    <div className="card-body">
                                        <h5 className="card-title">Exchange and Return policy</h5>
                                        <p className="card-text">you can exchange or return within 30 day</p>
                                        <a href="/#" className="btn btn-primary p-1">read more</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                })
            }
            <div className='related'>
                <h3 className='text-center text-bg-success m-3'>related product</h3>
                <div className='row'>
                    { allProducts?.productsList
                        ?.filter((product) => {
                            return product.category === categoryName;
                        }).map(product => {
                            return (
                                <div key={product._id} className='w-50 col-6 p-1 '>
                                    <Link onClick={ GoUP } to={ `/products/${product._id}` }  >
                                        <img className='img img-fluid'  src={ product.images[ 0 ] } />

                                    </Link>
                                </div>
                            );
                        }) }
                </div>
            </div>
            <div className='recomend bg-body-secondary my-5 py-5'>
                <GoTools style={ { fontSize: "30px", width:"100%",color:"green"  ,margin:"10px 0"}}/>
                <h3 className='text-center text-bg-danger p-2 rounded m-3'>SOON</h3>
            <h3 className='text-center p-2'>recommended product</h3>
                        
                <p className='p-3 text-center border border-success mx-2 my-4'>here we will recommending for you amother product will be make your outfit is completed so follow us and all of new      </p>
            </div>
            
        </div>
    );
}

export default Product;