import React, { useEffect } from 'react';
import Header from '../navBar/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../rtk/getproducts/productsSlice';
import LoadingAnimatio from './LoadingAnimatio';
import UP from '../UP';
import ProductArya from '../productCommponant/ProductArya';
function LCstore() {

  const products = useSelector(state => state.getproducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
      
  }, [dispatch]);
  return (
    <div className='LCstore '>
      { products.loading ? <LoadingAnimatio /> : <>
        <Header />
        <UP />
        <ProductArya />
      </>
      }
    </div>
  );
}

export default LCstore;