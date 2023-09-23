import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsableProductList from './UsableProductList';
import { getProducts } from '../../rtk/getproducts/productsSlice';
import Header from '../navBar/Header';

function ManProduct() {
    const allproducts = useSelector(state => state.getproducts);
    const dispatch = useDispatch()
    const products = allproducts.productsList.filter((product) => {
        return product.category === 'man'
    })
    useEffect(() => {
        dispatch(getProducts());
    },[])

    return (
        <>
            <Header />
            <UsableProductList loading={ allproducts?.loading } products={products}/>
        </>
    );
}
// 
export default ManProduct;