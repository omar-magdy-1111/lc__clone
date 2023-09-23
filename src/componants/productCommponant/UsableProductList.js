import React, { useEffect, useState } from 'react';
import Share from '../LCstoreComponants/Share';
import { Link } from 'react-router-dom';
import { addItem } from '../../rtk/cart/cartSlice';
import { useDispatch } from 'react-redux';
import ViewQuickly from './ViewQuickly';
import { LuSettings2 } from 'react-icons/lu';
import { LIKE } from '../../rtk/favourite/favouriteSlice';
import { AiFillCheckCircle, AiFillHeart } from 'react-icons/ai';
import Header from '../navBar/Header';
import LoadingAnimatio from '../LCstoreComponants/LoadingAnimatio';

function UsableProductList(props) {
    const [ storage, setstorage ] = useState([]);

    const [ sort, setSort ] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        setstorage(JSON.parse(localStorage.getItem('favourites')));
        
    }, []);




    


    const handleClick = (product) => {

        
        let itemInfavourites = storage?.find((item) => item._id === product._id);
        if (itemInfavourites !== undefined) {
            return <AiFillHeart style={ { color: "#298fcf" } } />
        } else if(itemInfavourites === undefined) {
            return <AiFillHeart style={ { color:"#212529"}}/>

        
        }
    
        
    };




    return (
        <>
            <Header />
           
        <div className='ProductList d-flex justify-content-center mt-5'>
            <div className=' container-fluid my-0 row justify-content-evenly'>
                <h1 className='text-bg-success fs-2 m-3 text-center'  >PRODUCT LIST</h1><br></br>
                <div className='d-flex align-items-center justify-content-end '>
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button  me-2  w-100" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Sort
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse ">
                                <div className="accordion-body p-0" style={ { maxWidth: "300px" } }>
                                    <ul className="list-group m-0 ">
                                        <li className="list-group-item" style={ { cursor: "pointer" } } onClick={ () => setSort('LOW') } >Lowest price</li>
                                        <li className="list-group-item" style={ { cursor: "pointer" } } onClick={ () => setSort('HIGH') } >Highest price</li>
                                        <li className="list-group-item" style={ { cursor: "pointer" } }>Best sellers</li>
                                        <li className="list-group-item" style={ { cursor: "pointer" } }>Most liked</li>
                                        <li className="list-group-item" style={ { cursor: "pointer" } }>Discount rate</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='view'></div>
                {
                    !props.loading && [ ...props.products ].sort((a, b) => {
                        switch (sort) {
                            case 'LOW': return a.price - b.price;
                            case 'HIGH': return b.price - a.price;
                            default: return props.products;
                        }

                    })
                        .map((product) => {
                            return (
                                <div key={ product._id } className="card ProductCard col-12 col-sm-5 col-md-3 col-xl-2 p-0  m-2">
                                    {/* ................................................... */ }
                                    <div>
                                        
                                    <span onClick={ () => { dispatch(LIKE(product)); setstorage(JSON.parse(localStorage.getItem('favourites'))); }} id={ `LIKE${product._id}` } className='Add-To-Like-List' >  { handleClick(product) }</span>
</div>



                                    <div className='setting' >
                                        <p>
                                            <button className="btn  p-0" type="button" data-bs-toggle="collapse" data-bs-target={ `#${product._id}` } aria-expanded="false" aria-controls="collapseWidthExample">
                                                <LuSettings2 />
                                            </button>
                                        </p>

                                        <div className="collapse collapse" id={ product._id }>
                                            <span className="card card-body p-0" >
                                                <ul key={ Math.random() } className="list-group m-0 ">
                                                    <Link to={ `/LCstore/products/${product._id}` } className="list-group-item " key={ `${product._id}0` }  > Go to Product</Link>
                                                    <li key={ Math.random() } className="list-group-item "  ><ViewQuickly product={ product } /> </li>
                                                    <li key={ Math.random() } onClick={ () => dispatch(addItem(product)) } className="list-group-item toggle" >Add to cart <AiFillCheckCircle style={ { fontSize: "20px", color:"#ffffff"}} /></li>
                                                </ul>
                                            </span>
                                        </div>

                                    </div>

                                    {/* ................................................... */ }
                                    { !props.loading ? <img src={ product.images[ 0 ] } className="card-img-top" alt="..." /> : <LoadingAnimatio /> }
                                    < Share product={ product } itemLink={ `/products/${product._id}` } key={ Math.random() } />
                                    
                                    <span className='add-To-like-list'></span>
                                    <div className="card-body p-1">
                                        <p className="card-text">{ product.name }</p>
                                    </div>
                                </div>
                            );
                        })
                }
            </div>
            </div>
        </>
    );
}

export default UsableProductList;



