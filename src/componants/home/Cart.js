import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItemById } from '../../rtk/cart/cartSlice';
import CartPoupap from './homeComponats/CartPoupap';
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { TfiMoney } from 'react-icons/tfi'
function Cart() {
  const cart = useSelector(state => state.cart.items);
  const [ITEM, setITEM] = useState({});
  const dispatch = useDispatch()
  const [ storage, setstorage ] = useState([]);
  useEffect(() => {

    if (localStorage.getItem('cart')) {
      setstorage(JSON.parse(localStorage.getItem('cart')));
    }
    dispatch(removeItemById(ITEM))
    setstorage(JSON.parse(localStorage.getItem('cart')));
    
    dispatch(addItem)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ITEM, dispatch ,localStorage.getItem('cart')])
  
  const getDate = () => {
    const date = new Date();
    const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return ` ${date.getDate()} ${monthNames[date.getMonth()]} ,${date.getFullYear()}`;
  }

  const cartCount = () => {
    let count =0
      storage.map((product) => {
      return   count += product.quantity
      })
    return count
  }
  const cartAmount = () => {
    let count =0
      storage.map((product) => {
      return   count += product.quantity * product.price
      })
    return count
  }

  console.log(cart);
  return (
    <div className='container Cart'>


      <div className='container' >
        <h1 className='text-center text-bg-success m-3 p-1'>Product Cart</h1>
        <div className=' border border-success rounded my-3 text-center'  >
          <h3 className='fs-2 text-black-50' >Cart Includes</h3>
          <div className='d-flex justify-content-around align-items-center'>
            <div>count: <span className='text-success fs-5'> { cartCount() }</span></div>
            <div>price: <span className='text-success fs-5'> { cartAmount()}</span> <TfiMoney/> </div>
          </div>
        </div>

        { !storage.length ? <h1>cart is empty</h1> : <>

          { storage.map((item) => {
            return (

              <div key={Math.random()} className="card mb-3" style={ { maxWidth: "540px" } }>
                <div className="row g-0">
                  <div className="col-sm-4">
                    <img src={item.images[0]} className="img-fluid rounded" alt="..." />
                  </div>
                  <div className="col-sm-8">
                    <div className="card-body d-flex flex-column justify-content-around h-100">
                      <h5 className="card-title"> { item.name.slice(0,25)}...</h5> 
                      <p className="card-text fs-5 fw-medium text-success">Count: { item.quantity }</p>
                      <p className="card-text"><small className="text-body-secondary d-flex justify-content-start align-items-center"><BsFillCalendarDateFill style={{marginRight:"6px"}}/>{ getDate() }</small></p>
                      <div className='d-flex justify-content-around align-items-center'>
                        <button className='update btn btn-primary' ><CartPoupap item={item}  /></button>
                        <button onClick={ () => {  setITEM(item)}} className='remove btn btn-danger'>remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }) } 

        </> }



      </div>


    </div>
  );
}

export default Cart;


