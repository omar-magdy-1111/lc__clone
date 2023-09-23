import React, { useEffect } from 'react'
import UsableProductList from './UsableProductList';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../rtk/getproducts/productsSlice';

function WomenProduct() {
  const allproducts = useSelector(state => state.getproducts);
  const dispatch = useDispatch();
  const products = allproducts.productsList.filter((product) => {
    return product.category === 'women';
  })
  useEffect(() => {

    dispatch(getProducts());

  }, []);
  return (
    <>
      <UsableProductList loading={ allproducts.loading } products={ products } />
    </>
  )
}

export default WomenProduct