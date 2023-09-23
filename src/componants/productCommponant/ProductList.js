import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../rtk/getproducts/productsSlice';
import '../../styleSheet/LCstore_css/ProductList.css';
import '../../styleSheet/share.css';
import UsableProductList from './UsableProductList';
function ProductList() {
  const allproducts = useSelector(state => state.getproducts);
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getProducts());

    setloadeng(allproducts.loading)
  }, [allproducts.loading, dispatch]);
  const [ loadeng, setloadeng ] = useState();
  return (

    !loadeng && <>
      
    <UsableProductList loading={ allproducts.loading } products={ allproducts.productsList }/>
    </>



  );
}

export default ProductList;







