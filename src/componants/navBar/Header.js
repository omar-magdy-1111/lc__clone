import React, { useEffect, useState } from 'react';
import LCWLOGO from '../LCWLOGO';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../rtk/getproducts/productsSlice';




function Header() {
    const allroducts = useSelector(state => state.getproducts);
    const dispatch = useDispatch()
    const [ cart, setcart ] = useState();
    const [ favourites, setfavourites ] = useState();
    const [ loading, setloading ] = useState(allroducts.loading);
    // let cart = [];
    // cart = [ ...cart, JSON.parse(localStorage.getItem('cart')) ];
    // let favourite = [];
    // favourite = [ ...favourite, JSON.parse(localStorage.getItem('favourites')) ];
    const manProducts = allroducts?.productsList?.filter((product) => {
        return product.category === 'man';
    });

    const womenProducts = allroducts?.productsList?.filter((product) => {
        return product.category === 'women';
    });
    useEffect(() => {
        setloading(allroducts.loading)
        dispatch(getProducts())
        setcart(JSON.parse(localStorage.getItem('cart')))
        setfavourites(JSON.parse(localStorage.getItem('favourites')))
    }, [allroducts.loading, dispatch, loading])




    return (
        <div className='Header'>
            <nav className="navbar bg-body-tertiary fixed-top pt-2 px-1">
                <div className="container-fluid">
                    { <LCWLOGO /> }
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">{ <LCWLOGO /> }</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item fw-bold">
                                    <Link to={ '/' } className="nav-link active" aria-current="page">Home Page</Link>
                                    <hr className='p-1 my-1'></hr>
                                </li>
                                <li className="nav-item p-0 fw-bold">
                                    <Link to={ '/LCstore/products' } className="nav-link" >LCW Store ({ !loading && allroducts?.productsList.length })</Link>
                                    <hr className='p-1 my-1'></hr>
                                </li>
                                <li className="nav-item fw-bold">
                                    <Link to={ '/LCstore/products/man' } className="nav-link" >Man ({ !loading && manProducts?.length })</Link>
                                    <hr className='p-1 my-1'></hr>
                                </li>
                                <li className="nav-item fw-bold">
                                    <Link to={ '/LCstore/products/women' } className="nav-link " >Women ({ !loading && womenProducts?.length })</Link>
                                    <hr className='p-1 my-1'></hr>
                                </li>
                                <li className="nav-item fw-bold">
                                    <Link to={ '/cart' } className="nav-link" >Cart ({ !loading && cart?.length })</Link>
                                    <hr className='p-1 my-1'></hr>
                                </li>
                                <li className="nav-item fw-bold">
                                    <Link to={ '/LCstore/products/favorite' } className="nav-link" >Favorite ({ !loading && favourites?.length })</Link>
                                    <hr className='p-1 my-1'></hr>
                                </li>
                                <li className="nav-item fw-bold">
                                    <Link to={ 'favorite' } className="nav-link" >Services</Link>
                                    <hr className='p-1 my-1'></hr>
                                </li>
                                <li className="nav-item fw-bold">
                                    <Link to={ '/About' } className="nav-link" >About Us</Link>

                                </li>
                                <li className="nav-item fw-bold">
                                    <Link to={ '/createUser' } className="nav-link" >account</Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;